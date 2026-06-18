import { Card } from "@/components/ui/card";
import { CheckCircle2, Target, Users, Rocket, XCircle, ArrowRight } from "lucide-react";
import { useLocale } from "@/i18n/LocaleContext";

const WhatWeDo = () => {
  const { t } = useLocale();
  const icons = [Target, Rocket, Users];
  const painPoints = t.whatWeDo.painPoints.map((p, i) => ({ ...p, icon: icons[i] }));
  const outcomes = t.whatWeDo.outcomes;

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* What We Do */}
        <div className="text-center mb-6 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 px-2">
            <span className="text-foreground">{t.whatWeDo.h2Part1}</span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">{t.whatWeDo.h2Part2}</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            {t.whatWeDo.intro}
            <span className="block text-primary font-semibold mt-2 text-sm sm:text-base">{t.whatWeDo.introHighlight}</span>
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
                        {t.whatWeDo.beforeLabel}
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
                        {t.whatWeDo.afterLabel}
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
            <span className="bg-gradient-primary bg-clip-text text-transparent">{t.whatWeDo.resultsH3}</span>
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
              {t.whatWeDo.bottomLine1} <br className="hidden sm:block" />
              <span className="text-foreground font-semibold">{t.whatWeDo.bottomLine2}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;

