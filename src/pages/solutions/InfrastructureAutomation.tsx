import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, Zap, Clock, TrendingDown } from "lucide-react";
import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const InfrastructureAutomation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Infrastructure Automation Consulting | Target-Ops</title>
        <meta name="description" content="Infrastructure automation consulting: from manual provisioning to rapid, reliable deployment. Terraform, Pulumi and IaC on AWS, GCP and Azure. Free 30-minute call." />
        <meta property="og:title" content="Infrastructure Automation Consulting | Target-Ops" />
        <meta property="og:description" content="From manual provisioning to rapid, reliable deployment. Terraform, Pulumi and IaC on AWS, GCP and Azure." />
        <link rel="canonical" href="https://target-ops.io/solutions/infrastructure-automation/" />
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
              <Zap className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 px-2">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Infrastructure Automation Consulting
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8 px-2">
              Tired of manual server setup and configuration? We automate your infrastructure—from provisioning to scaling—with the goal of deployments that take minutes instead of days and far fewer manual errors.
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
                <Clock className="h-10 w-10 text-tech-cyan mb-4" />
                <h3 className="text-xl font-semibold mb-3">Slow Deployments</h3>
                <p className="text-muted-foreground">
                  Manual server setup taking days? We automate provisioning, configuration, and deployment—work aimed at cutting setup from days to minutes.
                </p>
              </Card>
              <Card className="bg-background/50 backdrop-blur-sm border-border p-6">
                <Zap className="h-10 w-10 text-tech-cyan mb-4" />
                <h3 className="text-xl font-semibold mb-3">Configuration Drift</h3>
                <p className="text-muted-foreground">
                  Servers configured differently? We implement Infrastructure as Code (IaC) so environments stay consistent and version-controlled.
                </p>
              </Card>
              <Card className="bg-background/50 backdrop-blur-sm border-border p-6">
                <TrendingDown className="h-10 w-10 text-tech-cyan mb-4" />
                <h3 className="text-xl font-semibold mb-3">Scaling Nightmares</h3>
                <p className="text-muted-foreground">
                  Can't handle traffic spikes? We build auto-scaling infrastructure designed to grow with demand and shrink when traffic drops—so you stop paying for idle capacity.
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
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">Complete infrastructure automation solution</p>
            </div>
            <Card className="bg-background/50 backdrop-blur-sm border-border p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-tech-cyan flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Infrastructure as Code (IaC)</h3>
                    <p className="text-muted-foreground">Terraform, Pulumi, or CloudFormation—your entire infrastructure defined in code</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-tech-cyan flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Automated Provisioning</h3>
                    <p className="text-muted-foreground">Spin up servers, databases, and networks with a single command</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-tech-cyan flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Configuration Management</h3>
                    <p className="text-muted-foreground">Ansible, Chef, or Puppet to keep all servers configured consistently</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-tech-cyan flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Auto-Scaling Setup</h3>
                    <p className="text-muted-foreground">Dynamic scaling based on CPU, memory, or custom metrics</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-tech-cyan flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Disaster Recovery</h3>
                    <p className="text-muted-foreground">Automated backups, snapshots, and recovery procedures</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-tech-cyan flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Documentation & Training</h3>
                    <p className="text-muted-foreground">Comprehensive docs and hands-on training for your team</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* How an Engagement Works */}
        <section className="relative py-8 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-2">How an Automation Engagement Works</h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">Senior engineers, honest scoping, code you own</p>
            </div>
            <Card className="bg-background/50 backdrop-blur-sm border-border p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-foreground font-semibold mb-2">1. Free 30-minute call</h3>
                  <p className="text-muted-foreground mb-6">A focused conversation about what you're running today and what "deploy in minutes" would need to look like for your team. If we're not the right fit, we'll say so on the call.</p>
                  <h3 className="text-foreground font-semibold mb-2">2. Infrastructure assessment</h3>
                  <p className="text-muted-foreground">A structured review of your provisioning, configuration, environments, and deployment flow. You get a written findings document with a prioritized, realistic scope.</p>
                </div>
                <div>
                  <h3 className="text-foreground font-semibold mb-2">3. Hands-on implementation</h3>
                  <p className="text-muted-foreground mb-6">We build the automation alongside your team — Terraform or Pulumi modules, configuration management, auto-scaling — checked into your repository, reviewed by your engineers, owned by you.</p>
                  <h3 className="text-foreground font-semibold mb-2">4. Documentation and handoff</h3>
                  <p className="text-muted-foreground">Your team runs the new setup when we leave. We document every pattern, pair on operational playbooks, and stay available for follow-up questions.</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Why Work With Target-Ops */}
        <section className="relative py-8 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-2">Why Work With Target-Ops on Infrastructure Automation</h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">Experienced engineers, open work, deep technical writing</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-background/50 backdrop-blur-sm border-border p-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Experienced engineers</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  A small founding team of three senior engineers. The person who scopes
                  your automation engagement is the person who builds it.
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
                  Our articles on IPv6 Kubernetes, Helm chart patterns, and K9s operations show
                  how we think about infrastructure-as-code at scale.
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
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">From startups to enterprises - automated infrastructure for every stage</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-background/50 backdrop-blur-sm border-border p-6">
                <Zap className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Startups</h3>
                <p className="text-sm text-muted-foreground mb-4">5-20 developers</p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Build automation from day one</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Scale-ready infrastructure</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Cost-optimized solutions</span>
                  </li>
                </ul>
              </Card>

              <Card className="bg-gradient-to-br from-primary/10 to-background border-primary p-6">
                <TrendingDown className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Growth Companies</h3>
                <p className="text-sm text-muted-foreground mb-4">20-200 developers</p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Automate legacy systems</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Handle rapid scaling</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Eliminate manual bottlenecks</span>
                  </li>
                </ul>
              </Card>

              <Card className="bg-background/50 backdrop-blur-sm border-border p-6">
                <Clock className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Enterprises</h3>
                <p className="text-sm text-muted-foreground mb-4">200+ developers</p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Complex automation workflows</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Multi-region infrastructure</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Compliance & governance</span>
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
                  q: "What tools do you use for infrastructure automation?",
                  a: "We're tool-agnostic and choose based on your needs. Common choices: Terraform or Pulumi for IaC, Ansible or Chef for configuration, Docker/Kubernetes for containers. We'll recommend what fits your stack."
                },
                {
                  q: "How long does implementation take?",
                  a: "It depends on scope. Automating a single service is a matter of weeks; multi-cloud or heavily manual environments take longer. After the assessment you get a concrete timeline before any commitment."
                },
                {
                  q: "Will my team be able to maintain this after you're done?",
                  a: "That's the goal. Knowledge transfer is built into our process—documentation, training sessions, and code reviews—so your team can manage and extend the automation without us."
                },
                {
                  q: "What if we're using legacy systems?",
                  a: "We specialize in modernizing legacy infrastructure. We can automate incrementally—starting with new services while gradually automating existing systems. No need to rip and replace everything."
                },
                {
                  q: "Do you support multi-cloud environments?",
                  a: "Yes. We work with AWS, GCP, Azure, and hybrid setups. We can automate infrastructure across multiple clouds with consistent tooling and processes."
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-10 py-6 shadow-lg shadow-primary/20" asChild>
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

export default InfrastructureAutomation;
