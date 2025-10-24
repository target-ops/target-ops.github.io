import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, Settings, Clock, TrendingDown, Users, Quote, Target, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";

const DevOpsConsulting = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>DevOps Consulting Services | Expert DevOps Engineers | Target-Ops</title>
        <meta name="description" content="Professional DevOps consulting for startups and enterprises. Speed up deploys by 10×, reduce cloud costs by 50%, automate infrastructure. AWS, GCP, Azure specialists." />
        <meta property="og:title" content="DevOps Consulting Services | Target-Ops" />
        <meta property="og:description" content="Expert DevOps consulting: faster deployments, lower cloud costs, automated infrastructure." />
        <link rel="canonical" href="https://target-ops.io/solutions/devops-consulting" />
      </Helmet>
      <Navigation />
      
      <main className="relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tech-blue/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tech-cyan/20 rounded-full blur-3xl"></div>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-6">
              <Settings className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 px-2">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                DevOps Consulting
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto px-2">
              Stop struggling with slow deployments and team silos. We assess your processes, 
              create a clear roadmap, and implement DevOps practices that reduce deployment time by up to 80%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90" asChild>
                <Link to="/contact">
                  Start Your Transformation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/solutions">
                  View All Solutions
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="relative py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-2">Sound Familiar?</h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">These are the challenges we solve every day</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-surface-elevated border-border">
                <CardContent className="pt-6">
                  <Clock className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Slow Deployments</h3>
                  <p className="text-muted-foreground">
                    Releases take days or weeks, causing bottlenecks and missed opportunities.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-surface-elevated border-border">
                <CardContent className="pt-6">
                  <Users className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Team Silos</h3>
                  <p className="text-muted-foreground">
                    Dev and Ops teams don't communicate, leading to conflicts and delays.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-surface-elevated border-border">
                <CardContent className="pt-6">
                  <TrendingDown className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Manual Processes</h3>
                  <p className="text-muted-foreground">
                    Everything is done manually, increasing errors and wasting time.
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
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">Everything you need for DevOps success</p>
            </div>
            <Card className="bg-background/50 backdrop-blur-sm border-border p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Comprehensive infrastructure and process assessment",
                  "Customized DevOps roadmap aligned with business goals",
                  "Tool selection and implementation guidance",
                  "CI/CD pipeline design and setup",
                  "Infrastructure as Code implementation",
                  "Monitoring and observability setup",
                  "Team training and knowledge transfer",
                  "Best practices documentation",
                  "3 months of post-implementation support",
                  "Continuous optimization recommendations"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Results */}
        <section className="relative py-8 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-2">The Results You Can Expect</h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">Real outcomes from real implementations</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-primary/10 to-tech-blue/10 border-primary/30 p-8 text-center">
                <div className="text-5xl font-bold text-primary mb-2">80%</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Faster Deployment Time</div>
              </Card>
              <Card className="bg-gradient-to-br from-tech-blue/10 to-tech-cyan/10 border-tech-blue/30 p-8 text-center">
                <div className="text-5xl font-bold text-tech-blue mb-2">60%</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Reduction in Incidents</div>
              </Card>
              <Card className="bg-gradient-to-br from-tech-cyan/10 to-primary/10 border-tech-cyan/30 p-8 text-center">
                <div className="text-5xl font-bold text-tech-cyan mb-2">50%</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Less Time on Manual Work</div>
              </Card>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="relative py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-2">Success Story</h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">How we transformed a SaaS startup's deployment process</p>
            </div>
            <Card className="bg-gradient-to-br from-surface-elevated to-background border-primary/20">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      A fast-growing SaaS company with 50+ developers was struggling with manual deployments 
                      taking 2-3 days, frequent production incidents, and development teams working in silos. 
                      Their infrastructure was a mix of manually configured servers with no version control, 
                      making it impossible to scale reliably.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-sm text-muted-foreground">45-hour average deployment cycle</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-sm text-muted-foreground">12+ production incidents per month</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-sm text-muted-foreground">Zero infrastructure automation</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">The Solution & Results</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Over 12 weeks, we implemented a complete DevOps transformation: automated CI/CD pipelines, 
                      Infrastructure as Code with Terraform, containerized applications with Kubernetes, and 
                      comprehensive monitoring. We trained their team on the new workflows and established 
                      a culture of collaboration.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">Deployments reduced to <strong>30 minutes</strong></span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">Incidents down to <strong>2 per month</strong></span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm"><strong>100%</strong> infrastructure automated</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">Team deployed <strong>15x more frequently</strong></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-border">
                  <div className="flex items-start space-x-4">
                    <Quote className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-lg italic mb-4">
                        "Target-Ops didn't just implement tools—they transformed how our teams work together. 
                        We went from dreading releases to deploying multiple times a day with confidence. 
                        The ROI was evident within the first month."
                      </p>
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full"></div>
                        <div>
                          <p className="font-semibold">Sarah Chen</p>
                          <p className="text-sm text-muted-foreground">VP of Engineering, TechFlow SaaS</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Testimonials */}
        <section className="relative py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-2">What Our Clients Say</h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">Real feedback from companies we've transformed</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "We reduced our deployment time from 3 days to 2 hours. The team at Target-Ops understood 
                    our constraints and delivered exactly what we needed."
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-full"></div>
                    <div>
                      <p className="font-semibold text-sm">Michael Rodriguez</p>
                      <p className="text-xs text-muted-foreground">CTO, FinanceHub</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "The knowledge transfer was invaluable. Our team now maintains and improves the DevOps 
                    infrastructure independently. Best investment we made this year."
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-full"></div>
                    <div>
                      <p className="font-semibold text-sm">Emily Watson</p>
                      <p className="text-xs text-muted-foreground">Head of DevOps, CloudScale</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "Professional, knowledgeable, and results-driven. They didn't just consult—they rolled 
                    up their sleeves and worked alongside our team."
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-full"></div>
                    <div>
                      <p className="font-semibold text-sm">David Kim</p>
                      <p className="text-xs text-muted-foreground">VP Engineering, DataStream</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Who We Work With */}
        <section className="relative py-8 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-2">We Work With All Sizes</h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">From startups to enterprises - custom solutions for every stage</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-card border-primary/30 hover:border-primary transition-all">
                <CardHeader>
                  <Zap className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Startups</CardTitle>
                  <p className="text-sm text-muted-foreground">5-20 developers</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Build DevOps from day one</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Scale-ready infrastructure</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Cost-optimized solutions</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Avoid common pitfalls</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/10 to-background border-primary">
                <CardHeader>
                  <Target className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Growth Companies</CardTitle>
                  <p className="text-sm text-muted-foreground">20-200 developers</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Modernize legacy systems</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Handle rapid scaling</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Team training & culture</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Reduce tech debt</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-primary/30 hover:border-primary transition-all">
                <CardHeader>
                  <Users className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Enterprises</CardTitle>
                  <p className="text-sm text-muted-foreground">200+ developers</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Complex transformations</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Multi-team coordination</span>
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
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">Everything you need to know before getting started</p>
            </div>
            <div className="space-y-6">
              {[
                {
                  q: "How long does a typical DevOps consulting engagement take?",
                  a: "Most transformations take 12-16 weeks from assessment to full implementation and handoff. However, you'll see improvements within the first month with quick wins. We can adjust the timeline based on your specific needs and pace."
                },
                {
                  q: "Do we need to have existing DevOps knowledge?",
                  a: "Not at all! That's exactly why you're hiring us. We work with teams at all levels—from those just starting their DevOps journey to experienced teams looking to optimize. We tailor our approach and training to your team's current skill level."
                },
                {
                  q: "Will you work with our existing tools or force new ones?",
                  a: "We always start by understanding your current toolchain and only recommend changes where there's clear value. If your existing tools work well, we'll optimize how you use them. We're tool-agnostic and focus on solving your problems, not pushing specific vendors."
                },
                {
                  q: "What happens after the engagement ends?",
                  a: "By the end of our engagement, your team will be fully trained and confident managing the new DevOps environment independently. We provide comprehensive documentation, runbooks, and 3 months of post-engagement support for questions. Many clients choose to continue with us for ongoing optimization."
                },
                {
                  q: "How much does DevOps consulting cost?",
                  a: "Investment varies based on your infrastructure complexity, team size, and goals. Most engagements range from $50K-$150K for a complete transformation. We provide a detailed proposal after our initial assessment call. The ROI typically exceeds the investment within 6-12 months through efficiency gains."
                },
                {
                  q: "Can you help with cloud migration at the same time?",
                  a: "Absolutely! We often combine DevOps consulting with cloud migration for maximum impact. In fact, it's the perfect time to implement DevOps practices while migrating. We can create a combined plan that addresses both needs."
                },
                {
                  q: "What if our team is resistant to change?",
                  a: "Change management is a core part of our process. We work closely with your team to understand concerns, demonstrate value through quick wins, and gradually build buy-in. We're not just implementing tools—we're helping shift culture, which requires empathy and patience."
                },
                {
                  q: "Do you offer ongoing support after implementation?",
                  a: "Yes! After the initial engagement, we offer flexible support options including monthly retainers, on-demand consulting hours, or periodic optimization reviews. Many clients start with our 3-month post-implementation support and then choose ongoing partnership."
                }
              ].map((faq, idx) => (
                <div key={idx} className="group">
                  <div className="flex items-start space-x-4 py-6 border-b border-border hover:border-primary/30 transition-colors">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm group-hover:bg-primary/20 transition-colors">
                      {idx + 1}
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {faq.q}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-primary/20 rounded-full text-primary font-semibold text-sm mb-6">
              🚀 Free Consultation Available
            </div>
            <p className="text-xl text-muted-foreground mb-10">
              Book a free 30-minute consultation—no sales pitch, just honest advice about your DevOps challenges.
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

export default DevOpsConsulting;

