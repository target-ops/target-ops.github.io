import { Card } from "@/components/ui/card";
import { CheckCircle2, Target, Users, Rocket, XCircle, ArrowRight } from "lucide-react";

const WhatWeDo = () => {
  const painPoints = [
    {
      icon: Target,
      service: "Deployment Speed",
      before: "Releases take days or weeks. Manual testing. Features are delayed. Customers wait.",
      after: "Deploy multiple times per day. Automated testing. Features ship in hours, not weeks.",
      metric: "From 1 deploy/week → 50+ deploys/week"
    },
    {
      icon: Rocket,
      service: "Cloud Costs",
      before: "Bills spike unexpectedly. No cost visibility. Over-provisioned resources. Budget overruns.",
      after: "Predictable monthly costs. Real-time monitoring. Right-sized infrastructure. 30-50% savings.",
      metric: "Average cost reduction: 40%"
    },
    {
      icon: Users,
      service: "System Reliability",
      before: "Frequent outages. Manual recovery. Incidents at 3am. Customers complain. Engineers burn out.",
      after: "99.9% uptime. Automated monitoring. Self-healing systems. Proactive alerts. Engineers sleep.",
      metric: "Downtime reduced by 95%"
    }
  ];

  const outcomes = [
    "Deploy 10× faster with automated CI/CD pipelines",
    "Cut cloud costs by 30–50% through optimization",
    "95% fewer manual errors with Infrastructure as Code",
    "Zero-downtime deployments with instant rollbacks",
    "Pass SOC 2, HIPAA, PCI-DSS audits with confidence",
    "Auto-scale infrastructure based on real-time demand"
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* What We Do */}
        <div className="text-center mb-6 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 px-2">
            <span className="text-foreground">Before Us </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">vs. After Us</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Startups don't realize they have an ops problem — they just know things feel broken.
            <span className="block text-primary font-semibold mt-2 text-sm sm:text-base">Here's what changes when we step in.</span>
          </p>
        </div>

        {/* Before/After Cards - Side by Side Comparison */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 p-3 sm:p-4 md:p-5 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 rounded-2xl overflow-hidden group">
                {/* Header with Icon */}
                <div className="flex items-center gap-2 mb-3 sm:mb-3.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <h3 className="text-xs sm:text-sm md:text-base font-bold">{point.service}</h3>
                </div>
                
                {/* Before and After - Side by Side */}
                <div className="flex items-stretch gap-2">
                  {/* Before State */}
                  <div className="flex-1 p-2 sm:p-2.5 md:p-3 bg-gradient-to-br from-red-500/10 to-red-500/5 border border-red-500/30 rounded-xl backdrop-blur-sm">
                    <div className="flex items-center gap-1 mb-1.5">
                      <XCircle className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-red-400 flex-shrink-0" />
                      <p className="text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-wide text-red-400 font-bold">
                        Before
                      </p>
                    </div>
                    <p className="text-[9px] sm:text-[10px] md:text-xs text-muted-foreground leading-tight sm:leading-snug">
                      {point.before}
                    </p>
                  </div>

                  {/* Animated Arrow */}
                  <div className="flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary animate-pulse group-hover:translate-x-1 transition-transform duration-300" />
                  </div>

                  {/* After State */}
                  <div className="flex-1 p-2 sm:p-2.5 md:p-3 bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/30 rounded-xl backdrop-blur-sm">
                    <div className="flex items-center gap-1 mb-1.5">
                      <CheckCircle2 className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-green-400 flex-shrink-0" />
                      <p className="text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-wide text-green-400 font-bold">
                        After
                      </p>
                    </div>
                    <p className="text-[9px] sm:text-[10px] md:text-xs text-foreground font-medium leading-tight sm:leading-snug">
                      {point.after}
                    </p>
                  </div>
                </div>

                {/* Metric at Bottom */}
                <div className="mt-2 sm:mt-2.5 md:mt-3 pt-2 sm:pt-2.5 md:pt-3 border-t border-border/50">
                  <p className="text-[9px] sm:text-[10px] md:text-xs text-center text-green-400 font-bold">
                    {point.metric}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Outcomes - Clean Simple Layout */}
        <div className="mb-6 sm:mb-8">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-5 sm:mb-6 md:mb-8 text-center px-2">
            <span className="bg-gradient-primary bg-clip-text text-transparent">The Results You Get</span>
          </h3>
          
          {/* Simple list with clean cards */}
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
            {outcomes.map((outcome, index) => (
              <div 
                key={index} 
                className="flex items-start gap-2.5 sm:gap-3 p-3 sm:p-4 md:p-5 bg-card/30 backdrop-blur-sm border border-primary/20 rounded-xl hover:border-primary/40 hover:bg-card/50 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                  </div>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-foreground leading-relaxed">
                  {outcome}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Message */}
          <div className="text-center p-4 sm:p-6 md:p-8 border-t border-primary/20 mt-6 sm:mt-8">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground px-2">
              We don't just optimize infrastructure — <br className="hidden sm:block" />
              <span className="text-foreground font-semibold">we build systems your engineers love maintaining</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;

