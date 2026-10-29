import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, Shield, Lock, FileCheck } from "lucide-react";
import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SecurityCompliance = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Security & Compliance | SOC 2, HIPAA, PCI-DSS | Target-Ops</title>
        <meta name="description" content="DevOps security and compliance services: SOC 2, HIPAA, PCI-DSS, GDPR. Automated security scanning, vulnerability management, and audit preparation." />
        <meta property="og:title" content="Security & Compliance Services | Target-Ops" />
        <meta property="og:description" content="Pass SOC 2, HIPAA, PCI-DSS audits. Automated security, compliance as code, continuous monitoring." />
        <link rel="canonical" href="https://target-ops.io/solutions/security-compliance/" />
      </Helmet>
      <Navigation />
      
      <main className="relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tech-blue/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tech-cyan/20 rounded-full blur-3xl"></div>

        {/* Hero */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-6">
              <Shield className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 px-2">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Security & Compliance
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8 px-2">
              Worried about security vulnerabilities or failing compliance audits? We harden your infrastructure, implement security best practices, and get you audit-ready for SOC 2, HIPAA, PCI-DSS, or GDPR.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-8" asChild>
                <Link to="/contact/">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/solutions/">View All Solutions</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* The Problems We Solve */}
        <section className="relative py-8 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center px-2">The Problems We Solve</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-background/50 backdrop-blur-sm border-border p-6">
                <Shield className="h-10 w-10 text-tech-purple mb-4" />
                <h3 className="text-xl font-semibold mb-3">Security Vulnerabilities</h3>
                <p className="text-muted-foreground">
                  Security holes keeping you up at night? We identify and fix vulnerabilities, implement defense-in-depth, and proactively monitor for threats.
                </p>
              </Card>
              <Card className="bg-background/50 backdrop-blur-sm border-border p-6">
                <FileCheck className="h-10 w-10 text-tech-purple mb-4" />
                <h3 className="text-xl font-semibold mb-3">Failed Audits</h3>
                <p className="text-muted-foreground">
                  Struggling with SOC 2, HIPAA, or PCI-DSS? We implement controls, document everything, and prepare you for audit success.
                </p>
              </Card>
              <Card className="bg-background/50 backdrop-blur-sm border-border p-6">
                <Lock className="h-10 w-10 text-tech-purple mb-4" />
                <h3 className="text-xl font-semibold mb-3">Access Control Issues</h3>
                <p className="text-muted-foreground">
                  Too many people with admin access? We implement least-privilege access, MFA, SSO, and proper identity management.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="relative py-8 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-2">What's Included</h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">Complete security and compliance solution</p>
            </div>
            <Card className="bg-background/50 backdrop-blur-sm border-border p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-tech-purple flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Security Assessment</h3>
                    <p className="text-muted-foreground">Comprehensive audit of your infrastructure to identify vulnerabilities and risks</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-tech-purple flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Infrastructure Hardening</h3>
                    <p className="text-muted-foreground">Network segmentation, firewalls, encryption at rest and in transit</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-tech-purple flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Access Management</h3>
                    <p className="text-muted-foreground">IAM policies, MFA implementation, SSO integration, least-privilege access</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-tech-purple flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Compliance Controls</h3>
                    <p className="text-muted-foreground">SOC 2, HIPAA, PCI-DSS, GDPR—we implement the controls you need</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-tech-purple flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Security Monitoring</h3>
                    <p className="text-muted-foreground">SIEM setup, intrusion detection, automated alerting for security events</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-tech-purple flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Documentation & Training</h3>
                    <p className="text-muted-foreground">Audit-ready documentation and security awareness training for your team</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>



        {/* How a Security & Compliance Engagement Works */}
        <section className="relative py-8 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-2">How a Security & Compliance Engagement Works</h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">Senior engineers, honest scoping, controls you own</p>
            </div>
            <Card className="bg-background/50 backdrop-blur-sm border-border p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-foreground font-semibold mb-2">1. Free 30-minute call</h3>
                  <p className="text-muted-foreground mb-6">A focused conversation about your security posture, the frameworks your customers are asking for, and your timeline. If we're not the right fit, we'll say so on the call.</p>
                  <h3 className="text-foreground font-semibold mb-2">2. Assessment and gap analysis</h3>
                  <p className="text-muted-foreground">A structured review of your infrastructure, access controls, and processes against your target framework. You get a written gap analysis with a prioritized remediation plan.</p>
                </div>
                <div>
                  <h3 className="text-foreground font-semibold mb-2">3. Hands-on implementation</h3>
                  <p className="text-muted-foreground mb-6">We implement the controls alongside your team—hardening, access management, monitoring, and logging—and build the audit documentation as we go.</p>
                  <h3 className="text-foreground font-semibold mb-2">4. Audit preparation and handoff</h3>
                  <p className="text-muted-foreground">We prepare you for the audit, support you through auditor questions, and leave your team with the documentation and training to stay compliant.</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Why Work With Target-Ops */}
        <section className="relative py-8 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-2">Why Work With Target-Ops on Security & Compliance</h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">Experienced engineers, open work, deep technical writing</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-background/50 backdrop-blur-sm border-border p-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Experienced engineers</h3>
                <p className="text-muted-foreground text-sm mb-4">
A small founding team of three senior engineers.
                </p>
                <Link to="/team/" className="text-primary hover:underline text-sm font-medium">
                  Meet the team →
                </Link>
              </Card>
              <Card className="bg-background/50 backdrop-blur-sm border-border p-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Open-source tooling</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  We build and maintain developer tooling — the VS Code DevOps Pack, AnyClown,
                  Homebrew taps — in public repositories you can inspect.
                </p>
                <Link to="/open-source/" className="text-primary hover:underline text-sm font-medium">
                  See our OSS work →
                </Link>
              </Card>
              <Card className="bg-background/50 backdrop-blur-sm border-border p-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Deep technical writing</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Our articles on Helm chart security patterns and production-grade Kubernetes
                  infrastructure show how we approach secure-by-default setups.
                </p>
                <Link to="/articles/" className="text-primary hover:underline text-sm font-medium">
                  Read the articles →
                </Link>
              </Card>
            </div>
          </div>
        </section>

        {/* Who We Work With */}
        <section className="relative py-8 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-2">We Work With All Sizes</h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">From startups to enterprises - security solutions for every stage</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-background/50 backdrop-blur-sm border-border p-6">
                <Shield className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Startups</h3>
                <p className="text-sm text-muted-foreground mb-4">5-20 developers</p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Security foundations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Essential compliance (SOC 2)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Investor-ready security</span>
                  </li>
                </ul>
              </Card>

              <Card className="bg-gradient-to-br from-primary/10 to-background border-primary p-6">
                <Lock className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Growth Companies</h3>
                <p className="text-sm text-muted-foreground mb-4">20-200 developers</p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Multi-framework compliance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Advanced threat detection</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Incident response plans</span>
                  </li>
                </ul>
              </Card>

              <Card className="bg-background/50 backdrop-blur-sm border-border p-6">
                <FileCheck className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Enterprises</h3>
                <p className="text-sm text-muted-foreground mb-4">200+ developers</p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Global compliance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Zero-trust architecture</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Custom security frameworks</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-2">Frequently Asked Questions</h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">Everything you need to know before getting started</p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "Which compliance frameworks do you support?",
                  a: "SOC 2 (Type I & II), HIPAA, PCI-DSS, GDPR, ISO 27001, and custom frameworks. We'll assess your needs and implement the right controls for your industry and customers."
                },
                {
                  q: "How long does it take to become compliant?",
                  a: "Depends on your starting point. SOC 2: 6-12 weeks. HIPAA: 8-12 weeks. PCI-DSS: 10-16 weeks. We'll provide a timeline after our initial assessment."
                },
                {
                  q: "Will this slow down our development?",
                  a: "No. We integrate security into your existing workflows without disrupting productivity. Automated security checks, streamlined approval processes, and developer-friendly tools."
                },
                {
                  q: "What if we fail the audit?",
                  a: "We prepare you thoroughly against the framework's requirements before the audit. If findings are identified, we remediate them quickly and support you through re-audit."
                },
                {
                  q: "Do you provide ongoing security support?",
                  a: "Yes. Many clients work with us on retainer for ongoing security monitoring, quarterly reviews, annual recertification, and incident response. We're here for the long haul."
                }
              ].map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-border">
                  <AccordionTrigger className="text-left hover:text-primary transition-colors py-4 px-2 data-[state=open]:text-primary">
                    <span className="text-sm sm:text-base md:text-lg font-semibold">{faq.q}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pb-4 px-2">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-primary/20 rounded-full text-primary font-semibold text-sm mb-6">
              🚀 Free Consultation Available
            </div>
            <p className="text-xl text-muted-foreground mb-10">
              Book a free 30-minute consultation, no sales pitch, just honest advice about your DevOps challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-6 sm:px-10 py-6 shadow-lg shadow-primary/20 w-full sm:w-auto max-w-full whitespace-normal text-center h-auto" asChild>
                <Link to="/contact/">
                  Schedule Your Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>No commitment • 30 minutes • Expert advice</span>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Related services:</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
                <Button variant="ghost" className="text-primary hover:text-primary/80" asChild>
                  <Link to="/solutions/devops-consulting/">
                    DevOps Consulting
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="ghost" className="text-primary hover:text-primary/80" asChild>
                  <Link to="/solutions/cicd/">
                    CI/CD Pipelines
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Or explore our other solutions:</p>
              <Button variant="ghost" className="text-primary hover:text-primary/80" asChild>
                <Link to="/solutions/">
                  View All Solutions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SecurityCompliance;
