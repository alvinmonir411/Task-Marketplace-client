import React from "react";
import CarouselDefault from "../../components/CarouselDefault";
import TestimonialsSection from "../../components/TestimonialsSection";
import StatsCounterSection from "../../components/StatsCounterSection";
import WhyChooseUsSection from "../../components/WhyChooseUsSection ";
import FetureTask from "../../components/FetureTask";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Fade cascade damping={0.3} triggerOnce>
        <CarouselDefault />
        <FetureTask />
        <TestimonialsSection />
        <StatsCounterSection />
        <WhyChooseUsSection />
      </Fade>
    </div>
  );
};

export default Home;
