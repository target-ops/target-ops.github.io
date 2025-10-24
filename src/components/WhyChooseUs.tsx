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
    <section className="py-12 sm:py-16 md:py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Why Choose Us */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2">
            <span className="text-foreground">Why Choose </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Target-Ops</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            We're not here to sell you tools. We're here to fix your DevOps.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {reasons.map((reason, index) => (
            <Card key={index} className="bg-card border-border p-5 sm:p-6 md:p-8 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-0.5 sm:mt-1" />
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3">{reason.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{reason.description}</p>
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

