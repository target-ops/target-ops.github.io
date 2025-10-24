import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Privacy Policy | Target-Ops</title>
        <meta name="description" content="Target-Ops Privacy Policy. Learn how we collect, use, and protect your personal information." />
        <link rel="canonical" href="https://target-ops.io/privacy" />
      </Helmet>
      <Navigation />
      <main className="pt-16">
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-2 bg-gradient-primary bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground mb-8 sm:mb-12 px-2">
              Last updated: October 24, 2025
            </p>
            
            <Card className="bg-surface-elevated border-border p-6 sm:p-8 md:p-10">
              <div className="space-y-8 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Introduction</h2>
                  <p>
                    Target-Ops ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
                  <p className="mb-3">We collect information that you provide directly to us, including:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong className="text-foreground">Contact Information:</strong> Name, email address, company name, and phone number when you fill out our contact form or request a consultation.</li>
                    <li><strong className="text-foreground">Communication Data:</strong> Messages, feedback, and correspondence you send to us.</li>
                    <li><strong className="text-foreground">Usage Data:</strong> Information about how you access and use our website, including your IP address, browser type, pages visited, and time spent on pages.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
                  <p className="mb-3">We use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Respond to your inquiries and provide customer support</li>
                    <li>Schedule and conduct consultations</li>
                    <li>Send you updates about our services (with your consent)</li>
                    <li>Improve our website and services</li>
                    <li>Analyze usage patterns and trends</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Information Sharing</h2>
                  <p>
                    We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li><strong className="text-foreground">Service Providers:</strong> With trusted third-party service providers who assist us in operating our website and conducting our business (e.g., email services, analytics providers).</li>
                    <li><strong className="text-foreground">Legal Requirements:</strong> When required by law or to protect our rights, property, or safety.</li>
                    <li><strong className="text-foreground">Business Transfers:</strong> In connection with any merger, sale of company assets, or acquisition.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Cookies and Tracking</h2>
                  <p>
                    We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Data Security</h2>
                  <p>
                    We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Your Rights</h2>
                  <p className="mb-3">You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of inaccurate or incomplete information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Object to processing of your personal information</li>
                  </ul>
                  <p className="mt-4">
                    To exercise these rights, please contact us at <a href="mailto:privacy@target-ops.io" className="text-primary hover:underline">privacy@target-ops.io</a>
                  </p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">International Data Transfers</h2>
                  <p>
                    Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Children's Privacy</h2>
                  <p>
                    Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Changes to This Privacy Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Contact Us</h2>
                  <p>
                    If you have any questions about this Privacy Policy, please contact us:
                  </p>
                  <ul className="list-none space-y-2 mt-4">
                    <li><strong className="text-foreground">Email:</strong> <a href="mailto:privacy@target-ops.io" className="text-primary hover:underline">privacy@target-ops.io</a></li>
                    <li><strong className="text-foreground">Website:</strong> <a href="https://target-ops.io/contact" className="text-primary hover:underline">target-ops.io/contact</a></li>
                  </ul>
                </section>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;

