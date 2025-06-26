import React from 'react'
import Sideberdashbord from '../Dashbord/Sideberdashbord'
import { motion } from 'framer-motion';


const Dashboard = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className=''>
          <Sideberdashbord />
        </div>
      </motion.div>
    </div>
  );
}

export default Dashboard
