import { Card } from "@/components/ui/card";
import { CheckCircle2, Target, Users, Rocket, XCircle } from "lucide-react";

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
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* What We Do */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Before Us </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">vs. After Us</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Startups don't realize they have an ops problem — they just know things feel broken.
            <span className="block text-primary font-semibold mt-2">Here's what changes when we step in.</span>
          </p>
        </div>

        {/* Before/After Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <Card key={index} className="bg-card border-border p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                <div className="flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold">{point.service}</h3>
                  </div>
                  
                  {/* Before State */}
                  <div className="mb-3 p-3 bg-red-500/5 border border-red-500/20 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <XCircle className="h-4 w-4 text-red-400 flex-shrink-0" />
                      <p className="text-xs uppercase tracking-wide text-red-400 font-bold">
                        Before
                      </p>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {point.before}
                    </p>
                  </div>

                  {/* After State */}
                  <div className="p-3 bg-green-500/5 border border-green-500/20 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0" />
                      <p className="text-xs uppercase tracking-wide text-green-400 font-bold">
                        After
                      </p>
                    </div>
                    <p className="text-xs text-foreground font-medium leading-relaxed mb-2">
                      {point.after}
                    </p>
                    <div className="pt-2 mt-2 border-t border-green-500/20">
                      <p className="text-xs text-green-400 font-bold">
                        {point.metric}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Outcomes */}
        <Card className="bg-gradient-to-br from-primary/5 via-background to-tech-cyan/5 border-primary/20 p-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-8 text-center">The Results You Get</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {outcomes.map((outcome, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg text-foreground">{outcome}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground text-lg border-t border-border pt-8">
              We don't just optimize infrastructure — we build systems your engineers love maintaining.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default WhatWeDo;

