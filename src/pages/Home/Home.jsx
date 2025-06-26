import React from "react";
import CarouselDefault from "../../components/CarouselDefault";
import TestimonialsSection from "../../components/TestimonialsSection";
import StatsCounterSection from "../../components/StatsCounterSection";
import WhyChooseUsSection from "../../components/WhyChooseUsSection ";
import FetureTask from "../../components/FetureTask";

import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div className="container mx-auto">
      <CarouselDefault />
      <FetureTask />
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <TestimonialsSection />
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <StatsCounterSection />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <WhyChooseUsSection />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
