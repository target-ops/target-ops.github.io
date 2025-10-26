import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, GitBranch, Rocket, Bug, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CICDPipelines = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>CI/CD Pipeline Services | GitHub Actions, GitLab CI, Jenkins | Target-Ops</title>
        <meta name="description" content="Build automated CI/CD pipelines with GitHub Actions, GitLab CI, and Jenkins. Deploy 10× faster with automated testing, security scanning, and zero-downtime releases." />
        <meta property="og:title" content="CI/CD Pipeline Services | Target-Ops" />
        <meta property="og:description" content="Automated CI/CD pipelines: faster deploys, automated testing, zero downtime." />
        <link rel="canonical" href="https://target-ops.io/solutions/cicd" />
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
              <GitBranch className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 px-2">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                CI/CD Pipelines
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8 px-2">
              Still deploying code manually? We build automated pipelines that test and deploy your code in minutes—enabling your team to release updates 10x faster while catching bugs before they reach production.
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
                <Rocket className="h-10 w-10 text-tech-blue mb-4" />
                <h3 className="text-xl font-semibold mb-3">Slow Release Cycles</h3>
                <p className="text-muted-foreground">
                  Deploying once a week (or month)? We automate testing and deployment so you can ship multiple times per day with confidence.
                </p>
              </Card>
              <Card className="bg-background/50 backdrop-blur-sm border-border p-6">
                <Bug className="h-10 w-10 text-tech-blue mb-4" />
                <h3 className="text-xl font-semibold mb-3">Production Bugs</h3>
                <p className="text-muted-foreground">
                  Bugs slipping through to production? Automated testing in your pipeline catches issues before users ever see them.
                </p>
              </Card>
              <Card className="bg-background/50 backdrop-blur-sm border-border p-6">
                <GitBranch className="h-10 w-10 text-tech-blue mb-4" />
                <h3 className="text-xl font-semibold mb-3">Manual Deployments</h3>
                <p className="text-muted-foreground">
                  Still copying files to servers? We build push-button deployments that happen automatically when code is merged.
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
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">Complete CI/CD pipeline solution</p>
            </div>
            <Card className="bg-background/50 backdrop-blur-sm border-border p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-tech-blue flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Custom Pipeline Design</h3>
                    <p className="text-muted-foreground">Tailored to your tech stack—GitHub Actions, GitLab CI, Jenkins, CircleCI, or whatever you use</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-tech-blue flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Automated Testing</h3>
                    <p className="text-muted-foreground">Unit tests, integration tests, E2E tests—all running automatically on every commit</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-tech-blue flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Deployment Automation</h3>
                    <p className="text-muted-foreground">Automatic deployments to staging and production with approval gates</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-tech-blue flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Code Quality Checks</h3>
                    <p className="text-muted-foreground">Linting, security scans, code coverage—enforced before merge</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-tech-blue flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Rollback Mechanisms</h3>
                    <p className="text-muted-foreground">One-click rollbacks if something goes wrong in production</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-tech-blue flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Notifications & Monitoring</h3>
                    <p className="text-muted-foreground">Real-time alerts in Slack, email, or your preferred channel</p>
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
              <Card className="bg-gradient-to-br from-tech-blue/10 to-tech-cyan/10 border-tech-blue/30 p-8 text-center">
                <div className="text-5xl font-bold text-tech-blue mb-2">10x</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Faster Releases</div>
              </Card>
              <Card className="bg-gradient-to-br from-tech-cyan/10 to-tech-purple/10 border-tech-cyan/30 p-8 text-center">
                <div className="text-5xl font-bold text-tech-cyan mb-2">85%</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Fewer Bugs</div>
              </Card>
              <Card className="bg-gradient-to-br from-tech-purple/10 to-tech-blue/10 border-tech-purple/30 p-8 text-center">
                <div className="text-5xl font-bold text-tech-purple mb-2">70%</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Less Manual Work</div>
              </Card>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="relative py-8 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-2">Success Story</h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">SaaS Startup: From Weekly to Daily Deployments</p>
            </div>
            <Card className="bg-background/50 backdrop-blur-sm border-border p-8">
              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="text-foreground font-semibold mb-2">The Challenge</h3>
                  <p>A fast-growing SaaS company was deploying manually once a week. Their QA team spent 2 days testing before each release, and production bugs were frequent. Developers were afraid to ship code.</p>
                </div>
                <div>
                  <h3 className="text-foreground font-semibold mb-2">Our Solution</h3>
                  <p>We built a comprehensive CI/CD pipeline with GitHub Actions. Every commit triggered automated tests, security scans, and code quality checks. Successful builds auto-deployed to staging, then production after approval.</p>
                </div>
                <div>
                  <h3 className="text-foreground font-semibold mb-2">The Results</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Release frequency increased from weekly to multiple times per day</li>
                    <li>QA time reduced from 2 days to 2 hours (automated tests)</li>
                    <li>Production bugs dropped by 85%</li>
                    <li>Developer velocity increased by 3x</li>
                    <li>Time-to-market for new features cut in half</li>
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
                    "Our deployment process went from a nerve-wracking manual checklist to a smooth, automated flow. We're shipping 5x faster with way fewer bugs."
                  </p>
                </div>
                <div>
                  <div className="font-semibold">Alex Thompson</div>
                  <div className="text-sm text-muted-foreground">Engineering Manager, CloudSync</div>
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
                    "Target-Ops built us a CI/CD pipeline that just works. Every commit gets tested, every bug gets caught early. Our customers are happier, and so is our team."
                  </p>
                </div>
                <div>
                  <div className="font-semibold">Jennifer Lee</div>
                  <div className="text-sm text-muted-foreground">CTO, FinTech Solutions</div>
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
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">From startups to enterprises - deployment pipelines for every stage</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-background/50 backdrop-blur-sm border-border p-6">
                <Zap className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Startups</h3>
                <p className="text-sm text-muted-foreground mb-4">5-20 developers</p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Simple, fast pipelines</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Deploy multiple times per day</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Built for growth</span>
                  </li>
                </ul>
              </Card>

              <Card className="bg-gradient-to-br from-primary/10 to-background border-primary p-6">
                <GitBranch className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Growth Companies</h3>
                <p className="text-sm text-muted-foreground mb-4">20-200 developers</p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Multi-service pipelines</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Advanced testing & QA</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Feature flags & rollbacks</span>
                  </li>
                </ul>
              </Card>

              <Card className="bg-background/50 backdrop-blur-sm border-border p-6">
                <Rocket className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Enterprises</h3>
                <p className="text-sm text-muted-foreground mb-4">200+ developers</p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Enterprise-grade pipelines</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Multi-region deployments</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Compliance & audit trails</span>
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
                  q: "What CI/CD tools do you work with?",
                  a: "We're platform-agnostic. GitHub Actions, GitLab CI, Jenkins, CircleCI, Travis CI, Bitbucket Pipelines, Azure DevOps—whatever fits your workflow. We'll recommend the best option for your stack."
                },
                {
                  q: "How long does it take to set up a pipeline?",
                  a: "Most pipelines are up and running in 2-4 weeks. Simple projects (single service, basic tests): 1-2 weeks. Complex microservices with extensive testing: 4-6 weeks."
                },
                {
                  q: "Will this work with our existing tests?",
                  a: "Yes! We integrate your existing tests into the pipeline. If you don't have tests yet, we can help you build a testing strategy and implement automated tests."
                },
                {
                  q: "What if we have compliance requirements (SOC 2, HIPAA)?",
                  a: "We specialize in compliant pipelines. We'll implement approval gates, audit logs, security scans, and documentation to meet your compliance needs."
                },
                {
                  q: "Can we roll back if something goes wrong?",
                  a: "Absolutely. We build rollback mechanisms into every pipeline. One-click rollbacks to the previous version, plus automated rollbacks if health checks fail."
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

export default CICDPipelines;

