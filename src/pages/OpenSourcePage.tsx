import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { ossProjects } from "@/data/oss";
import { Helmet } from "react-helmet-async";

const OpenSourcePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Open Source DevOps Tools | K9s, VS Code, Homebrew | Target-Ops</title>
        <meta name="description" content="Target-Ops open source DevOps tools: K9s utilities, VS Code extensions, Homebrew taps, and infrastructure automation scripts. 50+ projects, 145+ GitHub stars, 1000+ downloads." />
        <meta property="og:title" content="Open Source DevOps Tools | Target-Ops" />
        <meta property="og:description" content="50+ open source DevOps tools including K9s utilities, VS Code extensions, and infrastructure automation scripts." />
        <link rel="canonical" href="https://target-ops.io/open-source" />
      </Helmet>
      <Navigation />
      <main className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-hero"></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        
        {/* Glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tech-blue/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tech-cyan/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        {/* Hero */}
        <section className="relative pt-24 pb-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Open Source, Real Impact
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-4">
              We don't just use open source — we build it.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
              At Target-Ops, open source is how we give back, share knowledge, and make DevOps better for everyone.
            </p>
            <Card className="bg-background/50 backdrop-blur-sm border-primary/30 p-6 max-w-3xl mx-auto">
              <p className="text-muted-foreground leading-relaxed">
                Every tool we create solves real-world DevOps pain — from faster onboarding to smoother multi-profile management.
              </p>
            </Card>
          </div>
        </section>

        {/* Section Intro */}
        <section className="relative py-8 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our open-source projects are built from real challenges we've faced in production.<br />
              Each tool was designed to remove friction, automate the boring stuff, and empower engineers everywhere to build and ship faster.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="relative py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ossProjects.map((project) => {
                const Icon = project.icon;
                return (
                  <Card key={project.id} className="bg-background/50 backdrop-blur-sm border-border hover:border-primary/50 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 flex flex-col h-full">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-xl">{project.name}</CardTitle>
                            <p className="text-sm text-muted-foreground mt-1">{project.title}</p>
                          </div>
                        </div>
                        <Github className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      </div>
                      <CardDescription className="text-muted-foreground">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <div className="flex-1 space-y-4">
                        <ul className="space-y-2 min-h-[48px]">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-center">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.slice(0, 3).map((tag, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button variant="outline" className="w-full group mt-4" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          View on GitHub
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-background/50 backdrop-blur-sm border-border p-8">
              <h3 className="text-2xl font-bold mb-8 text-center">Target-Ops Open Source in Numbers</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Active Projects</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-tech-blue mb-2">145+</div>
                  <div className="text-sm text-muted-foreground">GitHub Stars</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-tech-cyan mb-2">1000+</div>
                  <div className="text-sm text-muted-foreground">Downloads</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-tech-purple mb-2">❤️</div>
                  <div className="text-sm text-muted-foreground">Engineers Worldwide</div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-background/50 backdrop-blur-sm border-border p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Movement</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Open source is stronger together.<br />
                Contribute ideas, report issues, or submit PRs — and help us build tools that make DevOps better for everyone.
              </p>
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 hover:scale-105 text-lg px-10 py-6 shadow-lg shadow-primary/20 transition-all duration-300" asChild>
                <a href="https://github.com/target-ops" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 mr-2" />
                  Visit Our GitHub
                </a>
              </Button>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OpenSourcePage;