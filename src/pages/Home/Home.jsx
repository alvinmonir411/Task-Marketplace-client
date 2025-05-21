import React from "react";
import CarouselDefault from "../../components/CarouselDefault";
import TestimonialsSection from "../../components/TestimonialsSection";
import StatsCounterSection from "../../components/StatsCounterSection";
import WhyChooseUsSection from "../../components/WhyChooseUsSection ";
import FetureTask from "../../components/FetureTask";

const Home = () => {
  return (
    <div className="container mx-auto">
      <CarouselDefault />
      <FetureTask />
      <TestimonialsSection />
      <StatsCounterSection />
      <WhyChooseUsSection />
    </div>
  );
};

export default Home;
