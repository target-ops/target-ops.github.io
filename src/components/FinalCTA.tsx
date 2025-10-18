import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (
    <section className="relative py-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
          <span className="text-primary font-semibold text-sm">🚀 Free Consultation Available</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Transform Your DevOps?
        </h2>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Book a free 30-minute consultation — no sales pitch, just honest advice about your DevOps challenges.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-10 py-6 shadow-lg shadow-primary/20" asChild>
            <Link to="/contact">
              Schedule Your Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground mb-12">
          <CheckCircle2 className="w-4 h-4 text-primary" />
          <span>No commitment • 30 minutes • Expert advice</span>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">Or explore our solutions:</p>
          <Button variant="ghost" className="text-primary hover:text-primary/80" asChild>
            <Link to="/solutions">
              View All Solutions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

