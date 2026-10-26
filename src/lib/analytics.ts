import { articles } from "@/data/articles";

// Central Google Analytics helpers for Target-Ops.
// Rules:
// - Production only: nothing is sent from localhost, dev servers or previews.
// - No personal data: never send form field values, names, emails, or URLs
//   with query strings to Analytics.
// - No duplicates: GA4 enhanced measurement already covers page views
//   (including SPA history changes), scrolls and outbound clicks, so those
//   are intentionally NOT re-tracked here.

const KNOWN_PATHS = new Set([
  "/", "/about", "/solutions", "/open-source", "/articles", "/team", "/contact", "/privacy", "/terms",
  ...["devops-consulting", "cloud-migration", "infrastructure-automation", "cicd", "security-compliance"].map(id => `/solutions/${id}`),
  ...articles.map(article => `/articles/${article.id}`),
]);
export const safePagePath = (path: string): string => {
  const clean = path.split(/[?#]/)[0].replace(/\/$/, "") || "/";
  return KNOWN_PATHS.has(clean) ? clean : "/not-found";
};

const PRODUCTION_HOSTS = new Set(["target-ops.io", "www.target-ops.io"]);

export const isAnalyticsEnabled = (): boolean =>
  typeof window !== "undefined" && PRODUCTION_HOSTS.has(window.location.hostname);

type GtagFn = (...args: unknown[]) => void;

const getGtag = (): GtagFn | null => {
  if (!isAnalyticsEnabled()) return null;
  const gtag = (window as unknown as { gtag?: GtagFn }).gtag;
  return typeof gtag === "function" ? gtag : null;
};

export const trackEvent = (
  name: string,
  params: Record<string, string | number> = {},
): void => {
  const gtag = getGtag();
  if (!gtag) return;
  gtag("event", name, params);
};

/** Contact form submitted successfully (GA4 recommended lead event). */
export const trackLead = (method: string): void =>
  trackEvent("generate_lead", { method });

/** Contact form submission failed (Web3Forms error or network failure). */
export const trackContactFormError = (): void =>
  trackEvent("contact_form_error");

/** Contact form first interaction (visitor started filling the form). */
export const trackContactFormStart = (): void =>
  trackEvent("contact_form_start");

/** FAQ accordion item expanded on a solution page. */
export const trackFaqExpand = (question: string, sourcePage: string): void =>
  trackEvent("faq_expand", {
    faq_id: question,
    source_page: safePagePath(sourcePage),
  });

/** Clicks on Target-Ops' own external profiles (GitHub, LinkedIn, Telegram, dev.to). */
export const trackSocialClick = (network: string, sourcePage: string): void =>
  trackEvent("social_click", { network, source_page: sourcePage });

/** Unknown routes are grouped, never sent as arbitrary visitor-provided paths. */
export const trackPageNotFound = (): void =>
  trackEvent("page_not_found", { route_type: "unknown" });

/** Article reading progress (percent milestone, article path is a static slug). */
export const trackArticleProgress = (percent: number, articlePath: string): void =>
  trackEvent("article_progress", { percent, article_path: articlePath });

/** mailto: link clicks (not covered by GA4 enhanced measurement). */
export const trackEmailClick = (sourcePage: string): void =>
  trackEvent("email_click", { source_page: sourcePage });

/** Internal clicks that lead to the contact page (CTA effectiveness). */
export const trackContactCtaClick = (linkText: string, sourcePage: string): void =>
  trackEvent("contact_cta_click", {
    placement: linkText,
    source_page: sourcePage,
  });

/** Other internal navigation clicks (menu, footer, in-content links). */
export const trackNavClick = (
  linkPath: string,
  linkText: string,
  sourcePage: string,
): void =>
  trackEvent("nav_click", {
    link_path: linkPath,
    placement: linkText,
    source_page: sourcePage,
  });

/**
 * One delegated listener for mailto, social-profile and internal-nav clicks.
 * Call once at app startup.
 */
let clickTrackingInitialized = false;

export const initClickTracking = (): void => {
  if (typeof document === "undefined" || clickTrackingInitialized) return;
  clickTrackingInitialized = true;
  document.addEventListener("click", (event) => {
    if (!isAnalyticsEnabled()) return;
    const target = event.target as Element | null;
    const anchor = target?.closest?.("a[href]");
    if (!anchor) return;
    const href = anchor.getAttribute("href") || "";
    const page = safePagePath(window.location.pathname);
    if (href.startsWith("mailto:")) {
      trackEmailClick(page);
      return;
    }
    // Target-Ops' own external profiles: classify by network so community
    // engagement is visible at a glance. Other outbound clicks stay with
    // GA4 enhanced measurement.
    if (/^https?:\/\//.test(href)) {
      const url = new URL(href);
      const host = url.hostname.replace(/^www\./, "");
      const network = host === "github.com" && url.pathname === "/target-ops" ? "github"
        : host === "linkedin.com" && url.pathname === "/company/target-ops" ? "linkedin"
        : host === "t.me" && url.pathname === "/targetops" ? "telegram"
        : host === "dev.to" && url.pathname === "/target-ops" ? "devto" : null;
      if (network) trackSocialClick(network, page);
      return;
    }
    // Internal links (React Router links render as anchors).
    if (!href.startsWith("/") || href.startsWith("//") || href === "#") return;
    const text = anchor.closest("nav") ? "navigation" : anchor.closest("footer") ? "footer" : "content";
    const path = safePagePath(href);
    if (path === "/not-found") return;
    if (/^\/contact\/?$/.test(href)) {
      trackContactCtaClick(text, page);
    } else {
      trackNavClick(path, text, page);
    }
  }, { capture: true });
};

export const trackArticleEngaged = (path: string): void =>
  trackEvent("article_engaged", { article_path: safePagePath(path), active_seconds: 30 });
