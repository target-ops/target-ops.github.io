import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Settings, 
  Cloud, 
  Zap, 
  GitBranch, 
  Shield, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { solutions } from "@/data/solutions";
import React, { useRef, useState } from "react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Settings,
  Cloud,
  Zap,
  GitBranch,
  Shield
};

const Services = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const animationRef = useRef<number | null>(null);
  const isPausedRef = useRef(false);

  // Update pause state based on hover
  React.useEffect(() => {
    isPausedRef.current = isHovering;
    console.log('isPaused updated:', isHovering);
  }, [isHovering]);

  // Auto-scroll animation loop - Desktop only
  React.useEffect(() => {
    console.log('Starting auto-scroll animation');
    let frameId: number;
    
    const animate = () => {
      // Only auto-scroll on desktop (window width > 768px)
      if (scrollRef.current && !isPausedRef.current && window.innerWidth >= 768) {
        scrollRef.current.scrollLeft += 1;
        
        // Check if we've scrolled to the middle, then reset to start
        const maxScroll = scrollRef.current.scrollWidth / 2;
        if (scrollRef.current.scrollLeft >= maxScroll) {
          scrollRef.current.scrollLeft = 0;
        }
      }
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    
    return () => {
      console.log('Stopping auto-scroll animation');
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-surface-elevated">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 px-2">
            <span className="text-foreground">Stop Fighting Fires. </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Start Shipping Features.
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            Full-service DevOps consulting — from cloud migrations to CI/CD pipelines. We fix what's broken, automate what's manual, and optimize what's expensive.
          </p>
        </div>

        {/* Horizontal scrolling carousel */}
        <div className="relative overflow-hidden group/carousel">
          {/* Gradient overlays for fade effect - Desktop only */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface-elevated to-transparent z-10 pointer-events-none"></div>
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface-elevated to-transparent z-10 pointer-events-none"></div>
          
          <div 
            ref={scrollRef}
            className="flex gap-4 md:gap-8 py-4 overflow-x-auto scrollbar-hide snap-x md:snap-none snap-mandatory touch-pan-x"
            onMouseEnter={() => {
              console.log('Mouse entered carousel');
              setIsHovering(true);
            }}
            onMouseLeave={() => {
              console.log('Mouse left carousel');
              setIsHovering(false);
            }}
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
              scrollSnapType: window.innerWidth >= 768 ? 'none' : 'x mandatory'
            }}
          >
            {/* First set */}
            {solutions.map((solution) => {
              const Icon = iconMap[solution.icon];
              return (
                <Card key={`first-${solution.id}`} className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] snap-start rounded-2xl overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-primary/20">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl group-hover:text-primary transition-colors duration-300">
                      {solution.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                      {solution.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-2 mb-5">
                      {solution.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full group-hover:bg-gradient-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 rounded-xl" asChild>
                      <Link to={`/solutions/${solution.slug}`}>
                        Learn About {solution.title}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
            {/* Duplicate set for seamless loop */}
            {solutions.map((solution) => {
              const Icon = iconMap[solution.icon];
              return (
                <Card key={`second-${solution.id}`} className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] snap-start rounded-2xl overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-primary/20">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl group-hover:text-primary transition-colors duration-300">
                      {solution.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                      {solution.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-2 mb-5">
                      {solution.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full group-hover:bg-gradient-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 rounded-xl" asChild>
                      <Link to={`/solutions/${solution.slug}`}>
                        Learn About {solution.title}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-10 sm:mt-12 md:mt-16">
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-xl shadow-primary/30 rounded-xl px-8 py-6 text-base sm:text-lg" asChild>
            <Link to="/solutions">
              Check Our Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;