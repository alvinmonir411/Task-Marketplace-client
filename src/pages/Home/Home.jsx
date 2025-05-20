import React from "react";
import CarouselDefault from "../../components/CarouselDefault";
import TestimonialsSection from "../../components/TestimonialsSection";
import StatsCounterSection from "../../components/StatsCounterSection";
import WhyChooseUsSection from "../../components/WhyChooseUsSection ";

const Home = () => {
  return (
    <div className="container mx-auto">
      <CarouselDefault />
      <TestimonialsSection />
      <StatsCounterSection />
      <WhyChooseUsSection />
    </div>
  );
};

export default Home;
