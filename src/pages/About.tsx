import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About Us | Meet the Target-Ops Team | DevOps Experts</title>
        <meta name="description" content="Meet the Target-Ops team: Hagay, Ofir, and Vladi. Expert DevOps engineers with decades of experience helping startups and enterprises scale infrastructure on AWS, GCP, and Azure." />
        <meta property="og:title" content="About Us | Meet the Target-Ops Team" />
        <meta property="og:description" content="Meet the Target-Ops team: Hagay, Ofir, and Vladi. Expert DevOps engineers with decades of experience helping startups and enterprises scale infrastructure." />
        <link rel="canonical" href="https://target-ops.io/about" />
      </Helmet>
      <Navigation />
      <main className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-hero"></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        
        {/* Glow effects - Animated */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tech-blue/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tech-cyan/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        {/* Hero */}
        <section className="relative pt-24 pb-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Our Story
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Three friends. Decades of experience. One mission: Give back to the tech community.
            </p>
          </div>
        </section>

        {/* The Story */}
        <section className="relative pt-4 pb-8 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-background/50 backdrop-blur-sm border-border p-8 transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
              <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground text-2xl">It all started with coffee and frustration.</strong>
                </p>
                
                <p>
                  Three DevOps engineers — Hagay, Ofir, and Vladi — had spent years watching companies struggle with the same issues: slow deployments, manual processes, siloed teams, and preventable security incidents. From scrappy startups to global enterprises — they'd seen it all.
                </p>

                <p>
                  After decades of building and fixing infrastructure at scale, they realized something: it wasn't enough to just fix systems. They wanted to teach, empower, and give back to the community that helped shape their careers.
                </p>

                <p className="text-xl text-foreground font-semibold">
                  So in 2024, Target-Ops was born.
                </p>

                <p>
                  Not as another faceless consultancy, but as a true partnership. We don't just implement and leave — we work side by side with your team, transfer knowledge, and make sure you're stronger when we're done.
                </p>

                <p>
                  "Target-Ops" means hitting the target — and nailing operations — every single time.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="relative py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">What Makes Us Different</h2>
            <Card className="bg-background/50 backdrop-blur-sm border-border p-8 transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Engineers First, Consultants Second</strong>
                </p>

                <p>
                  We've been in your shoes.<br />
                  We've handled 3 AM incidents, managed legacy systems held together with duct tape, and led distributed teams. We know the pain — and how to fix it right.
                </p>

                <p>
                  <strong className="text-foreground">No One-Size-Fits-All Playbook</strong>
                </p>

                <p>
                  Every company is different. Every problem deserves a tailored solution. We don't push templates — we build what works for you.
                </p>

                <p>
                  <strong className="text-foreground">Transparency Over Sales</strong>
                </p>

                <p>
                  If something won't work, we'll tell you.<br />
                  If there's a simpler or cheaper path, we'll recommend it.<br />
                  If your team can do it themselves, we'll help them learn how.
                </p>

                <p>
                  Our reputation matters more than a quick deal.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* How We Work */}
        <section className="relative py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">How We Work</h2>
            <Card className="bg-background/50 backdrop-blur-sm border-border p-8 transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
              <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
                <div>
                  <p className="text-xl font-semibold text-foreground mb-3">We Join Your Team</p>
                  <p>
                    No "ivory tower" architects. We get into the trenches — in your Slack, reviewing PRs, joining standups. We work with you, not above you.
                  </p>
                </div>

                <div>
                  <p className="text-xl font-semibold text-foreground mb-3">Knowledge Transfer Is Non-Negotiable</p>
                  <p>
                    We're not here to build dependencies. We're here to build capabilities.<br />
                    Every solution comes with documentation, training, and open Q&A.<br />
                    Our goal? To make ourselves unnecessary — and we're proud when we succeed.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Community & Open Source */}
        <section className="relative py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Giving Back</h2>
            <Card className="bg-background/50 backdrop-blur-sm border-border p-8 transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  The tech community gave us everything — open source, shared wisdom, late-night Stack Overflow answers, and mentors who cared.
                </p>

                <p>
                  So we give back.<br />
                  We contribute to open source, speak at meetups, write technical articles, and mentor the next generation of engineers.
                </p>

                <p className="text-foreground font-semibold">
                  Target-Ops isn't just a business — it's our way of paying it forward.
                </p>

                <p>
                  <Link to="/open-source" className="text-primary hover:underline font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all duration-300">
                    Check out our open source projects →
                  </Link>
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* What We Do */}
        <section className="relative py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-background/50 backdrop-blur-sm border-border p-12 text-center transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Actually Do</h2>
              <p className="text-xl text-muted-foreground mb-12">
                We fix DevOps problems. Cloud migrations. CI/CD pipelines. Infrastructure automation. Security hardening. The whole stack.
              </p>
              <Button size="lg" variant="outline" className="hover:scale-105 hover:border-primary transition-all duration-300 group" asChild>
                <Link to="/solutions">
                  See Our Solutions
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </Card>
          </div>
        </section>

        {/* Meet the Team CTA */}
        <section className="relative py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want to Work Together?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              No sales team. No gatekeepers. Just three engineers who love solving problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 hover:scale-105 text-lg px-10 py-6 shadow-lg shadow-primary/20 transition-all duration-300" asChild>
                <Link to="/team">
                  Meet the Team
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="hover:scale-105 hover:border-primary transition-all duration-300" asChild>
                <Link to="/contact">
                  Get in Touch
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

export default About;