import React from 'react';
import { motion } from 'framer-motion';
import image2 from '../assets/images/secH4.webp';
import img1 from '../assets/images/secH1.webp';
import img2 from '../assets/images/secH2.webp';
import img3 from '../assets/images/secH3.webp';

function HomeSection1() {
  // Animation variants for section elements
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: 'easeInOut' } },
  };

  return (
    <div className='bg-secondary font-mont py-24 md:px-10 lg:px-24 px:8'>
      <div className='font-mont font-semibold text-center'>
        <motion.h3
          className='font-normal text-3xl'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Service
        </motion.h3>
        <motion.h4
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          We Provide The Perfect Service For You
        </motion.h4>
      </div>

      <motion.div
        className='md:grid md:grid-cols-2 flex flex-col-reverse grid-cols-1 gap-14 items-center justify-center mt-8'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className='flex flex-col gap-8 md:px-0 px-8'>
          {[img1, img2, img3].map((img, index) => (
            <motion.div
              className='flex items-center gap-8'
              key={index}
              variants={itemVariants}
            >
              <img src={img} alt="" />
              <div className='font-mont'>
                <p className='text-xl font-normal'>Plants Care</p>
                <p className='text-extralight tracking-tight'>
                  In Aenean purus, pretium sito amet sapien denim moste consectet sedoni urna placerat sodales.
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={imageVariants}
          className='image-container'
        >
          <img src={image2} alt="" className='md:h-[100%] object-cover' />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HomeSection1;
