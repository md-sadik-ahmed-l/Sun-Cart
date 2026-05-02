"use client";
import React from 'react';
import { motion } from "framer-motion";
import { FaSun, FaTree, } from 'react-icons/fa';
import { GiWaterfall } from "react-icons/gi";
import { TbBeach } from "react-icons/tb";

const brands = [
  { name: 'SunShade', logo: <FaSun></FaSun>, className: 'bg-orange-50 text-orange-400' },
  { name: 'Tropical Vibes', logo:<FaTree></FaTree>, className: 'bg-green-50 text-green-500' },
  { name: 'AquaWave', logo: <GiWaterfall />, className: 'bg-blue-50 text-blue-300' },
  { name: 'Beachy', logo: <TbBeach />, className: 'bg-amber-50 text-red-300' },
];

const TopBrands = () => {
  return (
    <section className="py-24 md:py-32 overflow-hidden ">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-black text-center text-sun-dark mb-16"
        >
          Top Brands
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {brands.map((brand, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10 }}
              className={`flex flex-col items-center justify-center p-10 rounded-3xl border-2 border-transparent hover:border-sun-yellow transition-all duration-500 cursor-pointer shadow-sm group grayscale-25  hover:grayscale-0 ${brand.className}`}
            >
              <motion.span 
                whileHover={{ scale: 1.2, rotate: 15 }}
                className="text-6xl md:text-7xl  mb-6 transition-transform duration-500"
              >
                {brand.logo}
              </motion.span>
              <span className="text-xl md:text-2xl font-black text-sun-dark text-center tracking-tight">
                {brand.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopBrands;
