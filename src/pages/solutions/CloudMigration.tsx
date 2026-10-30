import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, Cloud, DollarSign, Zap, AlertTriangle, Users, Target } from "lucide-react";
import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CloudMigration = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Cloud Migration Services | AWS, GCP, Azure Migration | Target-Ops</title>
        <meta name="description" content="Cloud migration services for AWS, GCP, and Azure. Zero-downtime migration strategy, cost optimization from day one, and security built in. Free 30-minute call." />
        <meta property="og:title" content="Cloud Migration Services | Target-Ops" />
        <meta property="og:description" content="Cloud migration to AWS, GCP, Azure with a zero-downtime strategy, cost optimization from day one, and security built in." />
        <link rel="canonical" href="https://target-ops.io/solutions/cloud-migration/" />
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
              <Cloud className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 px-2 bg-gradient-primary bg-clip-text text-transparent">
              Cloud Migration Services
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed px-2">
              Moving to the cloud but worried about downtime or data loss? We plan and execute your migration—from AWS to GCP to Azure—with a <strong className="text-foreground">zero-downtime strategy</strong> and <strong className="text-foreground">cost optimization built in from day one</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90" asChild>
                <Link to="/contact/">
                  Start Your Migration
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/solutions/">
                  View All Solutions
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="relative py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-2">Sound Familiar?</h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">These are the challenges we solve every day</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-surface-elevated border-border">
                <CardContent className="pt-6">
                  <AlertTriangle className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Fear of Downtime</h3>
                  <p className="text-muted-foreground">
                    You're worried a migration will crash your production environment and lose customers.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-surface-elevated border-border">
                <CardContent className="pt-6">
                  <DollarSign className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Cloud Costs Spiraling</h3>
                  <p className="text-muted-foreground">
                    Your cloud bill keeps growing, but you're not sure how to optimize without breaking things.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-surface-elevated border-border">
                <CardContent className="pt-6">
                  <Cloud className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Overwhelmed by Options</h3>
                  <p className="text-muted-foreground">
                    AWS, GCP, Azure—so many choices. You don't know which platform fits your needs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="relative py-8 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-2">What's Included</h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">Complete cloud migration, end-to-end</p>
            </div>
            <Card className="bg-background/50 backdrop-blur-sm border-border p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Cloud platform selection and assessment",
                  "Detailed migration planning and timeline",
                  "Zero-downtime migration strategy",
                  "Data transfer and validation",
                  "Application reconfiguration and testing",
                  "Cost optimization from day one",
                  "Security and compliance setup",
                  "Post-migration monitoring and support",
                  "Team training on cloud operations",
                  "3 months of optimization included"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>



        {/* How a Cloud Migration Engagement Works */}
        <section className="relative py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-2">How a Cloud Migration Engagement Works</h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">Senior engineers, honest scoping, infrastructure you own</p>
            </div>
            <Card className="bg-background/50 backdrop-blur-sm border-border p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-foreground font-semibold mb-2">1. Free 30-minute call</h3>
                  <p className="text-muted-foreground mb-6">A focused conversation about what you run today, what's driving the move, and what can't go down. If we're not the right fit, we'll say so on the call.</p>
                  <h3 className="text-foreground font-semibold mb-2">2. Assessment and migration plan</h3>
                  <p className="text-muted-foreground">A structured review of your current infrastructure, data, and dependencies. You get a written plan: platform recommendation, phased approach, and a rollback strategy for every phase.</p>
                </div>
                <div>
                  <h3 className="text-foreground font-semibold mb-2">3. Hands-on migration</h3>
                  <p className="text-muted-foreground mb-6">We execute the migration alongside your team—non-critical systems first to validate the process, production only once the process is proven. Everything documented as we go.</p>
                  <h3 className="text-foreground font-semibold mb-2">4. Optimization and handoff</h3>
                  <p className="text-muted-foreground">After the move we right-size and tune costs against your pre-migration baseline, train your team on cloud operations, and hand over documentation they can actually use.</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Why Work With Target-Ops */}
        <section className="relative py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-2">Why Work With Target-Ops on Cloud Migration</h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">Experienced engineers, open work, deep technical writing</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
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
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-6">
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
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Deep technical writing</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Our articles on cloud provider selection, IPv6 Kubernetes, and Helm chart
                    patterns show exactly how we approach cloud infrastructure.
                  </p>
                  <Link to="/articles/" className="text-primary hover:underline text-sm font-medium">
                    Read the articles →
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Who We Work With */}
        <section className="relative py-8 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-2">We Migrate All Sizes</h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">From startups to enterprises - safe migrations every time</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-card border-primary/30 hover:border-primary transition-all">
                <CardHeader>
                  <Zap className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Startups</CardTitle>
                  <p className="text-sm text-muted-foreground">First cloud setup</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Get cloud-native from day one</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Optimized for growth</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Minimal upfront costs</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Choose the right platform</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/10 to-background border-primary">
                <CardHeader>
                  <Target className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Growth Companies</CardTitle>
                  <p className="text-sm text-muted-foreground">Scale to the cloud</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Migrate existing systems</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Zero-downtime migration strategy</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Cost optimization from day one</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Auto-scaling infrastructure</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-primary/30 hover:border-primary transition-all">
                <CardHeader>
                  <Users className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Enterprises</CardTitle>
                  <p className="text-sm text-muted-foreground">Complex migrations</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Multi-cloud strategies</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Legacy system modernization</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Compliance & security</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Global infrastructure</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-2">Frequently Asked Questions</h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">Everything you need to know before migrating</p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "How long does a cloud migration take?",
                  a: "Timeline depends on your infrastructure size. Small applications (5-10 servers) take 2-4 weeks. Medium systems (20-50 servers) take 6-8 weeks. Large enterprises can take 3-6 months. We provide a detailed timeline after the assessment."
                },
                {
                  q: "Will there be any downtime during migration?",
                  a: "That's the plan. We use strategies like blue-green deployment, rolling migrations, and real-time replication with the goal of zero downtime—and we keep a rollback plan for every phase."
                },
                {
                  q: "Which cloud platform should I choose?",
                  a: "It depends on your specific needs. AWS offers the most services, GCP excels at data/ML workloads, and Azure integrates well with Microsoft ecosystems. We assess your requirements and recommend the best fit—or a multi-cloud strategy if needed."
                },
                {
                  q: "How much will I actually save on cloud costs?",
                  a: "It depends on your starting point. We right-size instances, use reserved capacity where it fits, set up auto-scaling, and eliminate idle resources—then measure the difference against your pre-migration baseline, so you see real numbers instead of promises."
                },
                {
                  q: "What if something goes wrong during migration?",
                  a: "We have rollback plans for every phase. If any issues arise, we can quickly revert to your previous state. We also migrate non-critical systems first to validate the process before touching production."
                },
                {
                  q: "Do you support multi-cloud migrations?",
                  a: "Absolutely! We often implement multi-cloud strategies where different workloads run on different platforms for optimal performance and cost. We handle AWS, GCP, Azure, and hybrid cloud setups."
                },
                {
                  q: "Will my team need cloud training?",
                  a: "Yes, and we include it! We train your team on cloud operations, cost management, security best practices, and troubleshooting. By the end, your team will be confident managing your cloud infrastructure independently."
                },
                {
                  q: "How much does cloud migration cost?",
                  a: "It depends on infrastructure complexity, data volume, and timeline. After the assessment you get a detailed proposal with a concrete scope and price."
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
                  <Link to="/solutions/infrastructure-automation/">
                    Infrastructure Automation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="ghost" className="text-primary hover:text-primary/80" asChild>
                  <Link to="/solutions/devops-consulting/">
                    DevOps Consulting
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

export default CloudMigration;
