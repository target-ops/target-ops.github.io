// Central Google Analytics helpers for Target-Ops.
// Rules:
// - Production only: nothing is sent from localhost, dev servers or previews.
// - No personal data: never send form field values, names, emails, or URLs
//   with query strings to Analytics.
// - No duplicates: GA4 enhanced measurement already covers page views
//   (including SPA history changes), scrolls and outbound clicks, so those
//   are intentionally NOT re-tracked here.

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

/** mailto: link clicks (not covered by GA4 enhanced measurement). */
export const trackEmailClick = (sourcePage: string): void =>
  trackEvent("email_click", { source_page: sourcePage });

/** Internal clicks that lead to the contact page (CTA effectiveness). */
export const trackContactCtaClick = (linkText: string, sourcePage: string): void =>
  trackEvent("contact_cta_click", {
    link_text: linkText.slice(0, 100),
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
    link_text: linkText.slice(0, 100),
    source_page: sourcePage,
  });

/**
 * One delegated listener for mailto and contact-CTA clicks.
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
    const page = window.location.pathname;
    if (href.startsWith("mailto:")) {
      trackEmailClick(page);
      return;
    }
    // Internal links (React Router links render as anchors). External links
    // are already covered by GA4 enhanced measurement outbound clicks.
    if (!href.startsWith("/") || href.startsWith("//") || href === "#") return;
    const text = (anchor.textContent || "").trim();
    if (/^\/contact\/?$/.test(href)) {
      trackContactCtaClick(text, page);
    } else {
      trackNavClick(href, text, page);
    }
  });
};
