import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import OpenSource from "@/components/OpenSource";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
