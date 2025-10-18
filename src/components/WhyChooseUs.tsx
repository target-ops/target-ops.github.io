import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Engineers First, Consultants Second",
      description: "We've sat in your chair — real engineers solving production pain. No buzzwords, no fluff."
    },
    {
      title: "No One-Size-Fits-All Playbook",
      description: "Your stack is unique. We build solutions that fit your team, your tech, and your timeline."
    },
    {
      title: "Transparency Over Sales",
      description: "No long contracts. No hidden fees. Just honest advice and DevOps that works."
    },
    {
      title: "Proven Track Record",
      description: "Decades of experience across startups and global enterprises. We've scaled systems serving millions."
    }
  ];

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Why Choose Us */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Why Choose </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Target-Ops</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not here to sell you tools. We're here to fix your DevOps.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <Card key={index} className="bg-card border-border p-8 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

