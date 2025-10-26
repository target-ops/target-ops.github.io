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
        <title>Infrastructure Automation | Terraform, Pulumi, IaC | Target-Ops</title>
        <meta name="description" content="Infrastructure automation with Terraform, Pulumi, and IaC. Automate provisioning, scaling, and disaster recovery. Deploy in minutes, not days." />
        <meta property="og:title" content="Infrastructure Automation | Target-Ops" />
        <meta property="og:description" content="Automate your infrastructure with Terraform and IaC. Deploy faster, scale smarter, eliminate manual errors." />
        <link rel="canonical" href="https://target-ops.io/solutions/infrastructure-automation" />
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
                Infrastructure Automation
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8 px-2">
              Tired of manual server setup and configuration? We automate your entire infrastructure—from provisioning to scaling—so your team can deploy in minutes instead of days and eliminate human errors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-8" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/solutions">View All Solutions</Link>
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
                  Manual server setup taking days? We automate provisioning, configuration, and deployment—reducing time from days to minutes.
                </p>
              </Card>
              <Card className="bg-background/50 backdrop-blur-sm border-border p-6">
                <Zap className="h-10 w-10 text-tech-cyan mb-4" />
                <h3 className="text-xl font-semibold mb-3">Configuration Drift</h3>
                <p className="text-muted-foreground">
                  Servers configured differently? We implement Infrastructure as Code (IaC) to ensure every environment is identical and version-controlled.
                </p>
              </Card>
              <Card className="bg-background/50 backdrop-blur-sm border-border p-6">
                <TrendingDown className="h-10 w-10 text-tech-cyan mb-4" />
                <h3 className="text-xl font-semibold mb-3">Scaling Nightmares</h3>
                <p className="text-muted-foreground">
                  Can't handle traffic spikes? We build auto-scaling infrastructure that grows with demand and shrinks when traffic drops—saving you money.
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

        {/* Results */}
        <section className="relative py-8 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center px-2">The Results</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-tech-cyan/10 to-tech-blue/10 border-tech-cyan/30 p-8 text-center">
                <div className="text-5xl font-bold text-tech-cyan mb-2">90%</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Faster Deployments</div>
              </Card>
              <Card className="bg-gradient-to-br from-tech-blue/10 to-tech-purple/10 border-tech-blue/30 p-8 text-center">
                <div className="text-5xl font-bold text-tech-blue mb-2">95%</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Fewer Errors</div>
              </Card>
              <Card className="bg-gradient-to-br from-tech-purple/10 to-tech-cyan/10 border-tech-purple/30 p-8 text-center">
                <div className="text-5xl font-bold text-tech-purple mb-2">40%</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Cost Reduction</div>
              </Card>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="relative py-8 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-2">Success Story</h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">E-commerce Platform: From 2-Day Deploys to 15 Minutes</p>
            </div>
            <Card className="bg-background/50 backdrop-blur-sm border-border p-8">
              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="text-foreground font-semibold mb-2">The Challenge</h3>
                  <p>A fast-growing e-commerce company was manually provisioning servers for each new microservice. Each deployment took 2+ days of DevOps time, and configuration inconsistencies caused frequent production issues.</p>
                </div>
                <div>
                  <h3 className="text-foreground font-semibold mb-2">Our Solution</h3>
                  <p>We implemented Terraform for infrastructure provisioning and Ansible for configuration management. All infrastructure became code-defined, version-controlled, and automated through GitOps workflows.</p>
                </div>
                <div>
                  <h3 className="text-foreground font-semibold mb-2">The Results</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Deployment time reduced from 2 days to 15 minutes</li>
                    <li>Zero configuration drift across 50+ servers</li>
                    <li>Auto-scaling reduced infrastructure costs by 35%</li>
                    <li>Team can now deploy 10x more frequently</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Testimonials */}
        <section className="relative py-8 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center px-2">What Our Clients Say</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-background/50 backdrop-blur-sm border-border p-8">
                <div className="mb-4">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-500">★</span>
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-6">
                    "Target-Ops automated our entire infrastructure. What used to take our team days now happens in minutes. Our developers are shipping features faster than ever."
                  </p>
                </div>
                <div>
                  <div className="font-semibold">Sarah Chen</div>
                  <div className="text-sm text-muted-foreground">CTO, TechFlow Inc.</div>
                </div>
              </Card>
              <Card className="bg-background/50 backdrop-blur-sm border-border p-8">
                <div className="mb-4">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-500">★</span>
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-6">
                    "The IaC implementation was flawless. Every environment is now identical, and we can spin up new infrastructure in seconds. Game changer."
                  </p>
                </div>
                <div>
                  <div className="font-semibold">Marcus Rodriguez</div>
                  <div className="text-sm text-muted-foreground">VP Engineering, DataStream</div>
                </div>
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
                  a: "Most projects take 4-8 weeks depending on complexity. Simple infrastructure: 2-3 weeks. Complex multi-cloud setups: 8-12 weeks. We'll provide a detailed timeline after assessment."
                },
                {
                  q: "Will my team be able to maintain this after you're done?",
                  a: "Absolutely. Knowledge transfer is built into our process. We provide documentation, training sessions, and code reviews. Your team will be confident managing and extending the automation."
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
                <Link to="/contact">
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
                <Link to="/solutions">
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

