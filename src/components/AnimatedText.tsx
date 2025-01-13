'use client';

import { motion } from 'framer-motion';
import React from 'react';

const AnimatedText = ({ children, className}:{children:React.ReactNode, className:string}) => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.02},
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };

  return (
    <motion.div
      className={`flex flex-col space-y-2 ${className}`} // Allow external classNames
      variants={containerVariants}
      initial="initial"
      whileInView="animate">
      <motion.p 
      variants={itemVariants}
      transition={{duration:0.5}
      }>
        {children}
      </motion.p>
    </motion.div>
  );
};

export default AnimatedText;
