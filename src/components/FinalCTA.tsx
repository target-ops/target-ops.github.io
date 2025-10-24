import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 border border-primary/20 rounded-full mb-4 sm:mb-6">
          <span className="text-primary font-semibold text-xs sm:text-sm">🚀 Free Consultation Available</span>
        </div>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2">
          Ready to Transform Your DevOps?
        </h2>
        
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
          Book a free 30-minute consultation — no sales pitch, just honest advice about your DevOps challenges.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-4 sm:mb-6 px-4">
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-6 shadow-lg shadow-primary/20 w-full sm:w-auto" asChild>
            <Link to="/contact">
              Schedule Your Free Consultation
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </Button>
        </div>

        <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-muted-foreground mb-8 sm:mb-12 px-4">
          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
          <span>No commitment • 30 minutes • Expert advice</span>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-border px-4">
          <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">Or explore our solutions:</p>
          <Button variant="ghost" className="text-primary hover:text-primary/80 text-sm sm:text-base" asChild>
            <Link to="/solutions">
              View All Solutions
              <ArrowRight className="ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

