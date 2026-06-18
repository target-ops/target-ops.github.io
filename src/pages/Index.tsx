import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import OpenSource from "@/components/OpenSource";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { useLocale } from "@/i18n/LocaleContext";

const Index = () => {
  const { locale } = useLocale();
  const canonical = locale === "he" ? "https://target-ops.io/he" : "https://target-ops.io/";

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <html lang={locale} />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="en" href="https://target-ops.io/" />
        <link rel="alternate" hrefLang="he" href="https://target-ops.io/he" />
        <link rel="alternate" hrefLang="x-default" href="https://target-ops.io/" />
      </Helmet>
      <Navigation />
      <Hero />
      <WhatWeDo />
      <Services />
      <WhyChooseUs />
      <OpenSource />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
