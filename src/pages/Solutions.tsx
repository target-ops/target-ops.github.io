import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Cloud, Settings, GitBranch, Shield, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import { solutions, whyChooseUs } from "@/data/solutions";
import { Helmet } from "react-helmet-async";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Settings,
  Cloud,
  Zap,
  GitBranch,
  Shield
};

const Solutions = () => {

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>DevOps Solutions | Cloud, Kubernetes, CI/CD, Security | Target-Ops</title>
        <meta name="description" content="Target-Ops DevOps solutions: cloud migration, infrastructure automation, CI/CD pipelines, Kubernetes consulting, and security compliance. Expert DevOps consulting for startups and enterprises." />
        <meta property="og:title" content="DevOps Solutions | Target-Ops" />
        <meta property="og:description" content="Cloud migration, infrastructure automation, CI/CD pipelines, Kubernetes consulting, and security compliance. Expert DevOps solutions." />
        <link rel="canonical" href="https://target-ops.io/solutions" />
      </Helmet>
      <Navigation />
      <main className="relative pt-16 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-hero"></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        
        {/* Glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tech-blue/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tech-cyan/20 rounded-full blur-3xl"></div>

        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                We Make Your DevOps Work
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Target-Ops takes the complexity out of DevOps. We assess your needs, implement the right solutions, 
                and train your team—so you can deploy faster, reduce costs, and focus on building great products.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
              {solutions.map((solution) => {
                const Icon = iconMap[solution.icon];
                return (
                  <Card key={solution.id} className="bg-background/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">{solution.title}</CardTitle>
                      <CardDescription className="text-muted-foreground text-base leading-relaxed">
                        {solution.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {solution.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all" asChild>
                        <Link to={`/solutions/${solution.slug}`}>
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Why Choose Us Section */}
            <div className="bg-background/50 backdrop-blur-sm rounded-lg border border-border p-12 mb-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                  {whyChooseUs.title}
                </h2>
                <p className="text-muted-foreground text-lg">
                  Partner with a team that's committed to your success
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {whyChooseUs.reasons.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">{reason.title}</h3>
                      <p className="text-muted-foreground">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;