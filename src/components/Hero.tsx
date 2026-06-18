import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, Zap, Shield, GitBranch } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocale } from "@/i18n/LocaleContext";

const Hero = () => {
  const { t } = useLocale();

  const services = [
    { icon: Cloud, ...t.hero.services.cloudMigration },
    { icon: Zap, ...t.hero.services.iac },
    { icon: GitBranch, ...t.hero.services.cicd },
    { icon: Shield, ...t.hero.services.security },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero"></div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tech-blue/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tech-cyan/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 md:pt-0">
        <div className="max-w-5xl mx-auto">
          {/* Main heading - Clear service offering */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight px-2 text-white">
            {t.hero.h1Line1}
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {t.hero.h1Line2}
            </span>
          </h1>

          {/* What we do - Clear and direct */}
          <p className="text-lg sm:text-xl md:text-2xl text-foreground mb-4 max-w-3xl mx-auto leading-relaxed font-semibold px-4">
            {t.hero.subtitle}
          </p>

          <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-3xl mx-auto px-4">
            {t.hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20 text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-6 group w-full sm:w-auto" asChild>
              <Link to="/contact">
                {t.hero.ctaPrimary}
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-surface-hover hover:scale-105 transition-all duration-300 text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-6 w-full sm:w-auto" asChild>
              <Link to="/solutions">
                {t.hero.ctaSecondary}
              </Link>
            </Button>
          </div>

          {/* Service icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-3xl mx-auto px-4">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col items-center space-y-1.5 sm:space-y-2 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-background/50 backdrop-blur-sm border border-border rounded-xl flex items-center justify-center group-hover:border-primary/50 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300 text-center">
                  {service.label}
                </span>
                <span className="text-[10px] sm:text-xs text-muted-foreground text-center">
                  {service.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
