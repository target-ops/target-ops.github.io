import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Code2, Package, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ossProjects } from "@/data/oss";

const OpenSource = () => {
  const stats = [
    { icon: Code2, label: "50+ Projects", desc: "Active repos" },
    { icon: Star, label: "145+ Stars", desc: "GitHub community" },
    { icon: Package, label: "1000+ Downloads", desc: "Worldwide reach" }
  ];

  // Use first 6 projects for the scrolling display
  const featuredProjects = ossProjects.slice(0, 6);

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-surface-elevated">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Left: Message */}
          <div>
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <Code2 className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  We Give Back
                </span>
              </h2>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              Open source is how we solve real DevOps pain for engineers everywhere.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 md:mb-10 leading-relaxed">
              From VS Code extensions to CLI tools — our projects are used by thousands of developers worldwide to automate workflows, manage infrastructure, and ship faster.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-10">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <p className="text-xs sm:text-sm md:text-base font-bold text-foreground">{stat.label}</p>
                    <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">{stat.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button className="bg-gradient-primary hover:opacity-90 transition-all" asChild>
                <Link to="/open-source">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://github.com/target-ops" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>

          {/* Right: Auto-scrolling Projects Preview */}
          <div className="relative h-[340px] sm:h-[380px] md:h-[420px] overflow-hidden">
            {/* Gradient overlays for fade effect */}
            <div className="absolute top-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-b from-surface-elevated to-transparent z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-t from-surface-elevated to-transparent z-10 pointer-events-none"></div>
            
            {/* Scrolling container */}
            <div className="animate-scroll-vertical space-y-3 sm:space-y-4">
              {/* First set */}
              {featuredProjects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <Card key={`first-${index}`} className="p-4 sm:p-5 bg-card border-border hover:border-primary/50 transition-all">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-sm sm:text-base mb-0.5 sm:mb-1">{project.name}</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">{project.title}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
              {/* Duplicate set for seamless loop */}
              {featuredProjects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <Card key={`second-${index}`} className="p-4 sm:p-5 bg-card border-border hover:border-primary/50 transition-all">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-sm sm:text-base mb-0.5 sm:mb-1">{project.name}</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">{project.title}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;