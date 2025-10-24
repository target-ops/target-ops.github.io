import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, Cloud, DollarSign, Zap, AlertTriangle, Users, Quote, Target } from "lucide-react";
import { Helmet } from "react-helmet-async";

const CloudMigration = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Cloud Migration Services | AWS, GCP, Azure Migration | Target-Ops</title>
        <meta name="description" content="Expert cloud migration services for AWS, GCP, and Azure. Zero-downtime migration, cost optimization, and security. Migrate your infrastructure with confidence." />
        <meta property="og:title" content="Cloud Migration Services | Target-Ops" />
        <meta property="og:description" content="Expert cloud migration to AWS, GCP, Azure. Zero downtime, optimized costs, enterprise security." />
        <link rel="canonical" href="https://target-ops.io/solutions/cloud-migration" />
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
              Cloud Migration
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed px-2">
              Moving to the cloud but worried about downtime or data loss? We plan and execute your entire migration—from AWS to GCP to Azure—ensuring <strong className="text-foreground">zero downtime</strong> and immediate cost savings of <strong className="text-foreground">30-50%</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90" asChild>
                <Link to="/contact">
                  Start Your Migration
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

        {/* Results */}
        <section className="relative py-8 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-2">The Results You Can Expect</h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">Real outcomes from real migrations</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-primary/10 to-tech-blue/10 border-primary/30 p-8 text-center">
                <div className="text-5xl font-bold text-primary mb-2">0</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Minutes of Downtime</div>
              </Card>
              <Card className="bg-gradient-to-br from-tech-blue/10 to-tech-cyan/10 border-tech-blue/30 p-8 text-center">
                <div className="text-5xl font-bold text-tech-blue mb-2">40%</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Average Cost Savings</div>
              </Card>
              <Card className="bg-gradient-to-br from-tech-cyan/10 to-primary/10 border-tech-cyan/30 p-8 text-center">
                <div className="text-5xl font-bold text-tech-cyan mb-2">3x</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Faster Infrastructure Scaling</div>
              </Card>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="relative py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-2">Success Story</h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">How we migrated a fintech startup to AWS with zero downtime</p>
            </div>
            <Card className="bg-gradient-to-br from-card to-background border-primary/20">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      A rapidly growing fintech company was running on expensive dedicated servers with limited 
                      scalability. They needed to migrate 50+ servers and 10TB of customer data to AWS without 
                      any downtime—while handling 10,000 concurrent users and meeting strict financial compliance 
                      requirements.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-sm text-muted-foreground">$45K/month infrastructure costs</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-sm text-muted-foreground">Zero scalability during peak times</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-sm text-muted-foreground">Migration must be invisible to users</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">The Solution & Results</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Over 8 weeks, we executed a phased migration using blue-green deployment strategy. We containerized 
                      their applications, set up auto-scaling infrastructure, implemented real-time data replication, and 
                      migrated during off-peak hours. The entire migration was transparent to users.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm"><strong>$0</strong> in downtime or data loss</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">Costs reduced to <strong>$18K/month</strong> (60% savings)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">Infrastructure scales <strong>automatically</strong></span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">Passed PCI DSS compliance audit</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-border">
                  <div className="flex items-start space-x-4">
                    <Quote className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-lg italic mb-4">
                        "We were terrified of the migration, but Target-Ops made it seamless. Not a single customer 
                        noticed the transition, and we're now saving $25K per month. Best decision we ever made."
                      </p>
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full"></div>
                        <div>
                          <p className="font-semibold">James Patterson</p>
                          <p className="text-sm text-muted-foreground">CTO, PayFlow Fintech</p>
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
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">Real feedback from successful migrations</p>
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
                    "Migrated from on-prem to AWS with zero issues. Target-Ops handled everything professionally 
                    and our cloud costs are 50% lower than we expected."
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-full"></div>
                    <div>
                      <p className="font-semibold text-sm">Lisa Martinez</p>
                      <p className="text-xs text-muted-foreground">VP Ops, MediaStream</p>
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
                    "We were skeptical about cloud savings, but the optimization they did saved us $30K/month. 
                    The ROI paid for the migration in 3 months."
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-full"></div>
                    <div>
                      <p className="font-semibold text-sm">Tom Anderson</p>
                      <p className="text-xs text-muted-foreground">CTO, RetailTech</p>
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
                    "Multi-cloud migration done right. They helped us leverage both AWS and GCP for different 
                    workloads. Performance improved 3x."
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-full"></div>
                    <div>
                      <p className="font-semibold text-sm">Priya Sharma</p>
                      <p className="text-xs text-muted-foreground">Head of Eng, DataWorks</p>
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
                      <span className="text-sm">Zero downtime guarantee</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Massive cost optimization</span>
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
            <div className="space-y-6">
              {[
                {
                  q: "How long does a cloud migration take?",
                  a: "Timeline depends on your infrastructure size. Small applications (5-10 servers) take 2-4 weeks. Medium systems (20-50 servers) take 6-8 weeks. Large enterprises can take 3-6 months. We provide a detailed timeline after the assessment."
                },
                {
                  q: "Will there be any downtime during migration?",
                  a: "No. We use proven strategies like blue-green deployment, rolling migrations, and real-time replication to ensure zero downtime. Your users won't notice the migration happening."
                },
                {
                  q: "Which cloud platform should I choose?",
                  a: "It depends on your specific needs. AWS offers the most services, GCP excels at data/ML workloads, and Azure integrates well with Microsoft ecosystems. We assess your requirements and recommend the best fit—or a multi-cloud strategy if needed."
                },
                {
                  q: "How much will I actually save on cloud costs?",
                  a: "Most clients see 30-50% savings compared to on-premise or poorly optimized cloud setups. We implement right-sizing, reserved instances, auto-scaling, and eliminate waste. Savings typically pay for the migration within 6-12 months."
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
                  a: "Investment ranges from $40K-$200K+ depending on infrastructure complexity, data volume, and timeline. However, cost savings typically exceed the migration investment within 6-12 months. We provide detailed proposals after assessment."
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

export default CloudMigration;

