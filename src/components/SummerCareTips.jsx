"use client";
import React from 'react';
import { IoWaterOutline, IoSunnyOutline, IoShirtOutline, IoSnowOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const tips = [
  {
    icon: <IoWaterOutline className="text-4xl text-blue-500" />,
    title: "Stay Hydrated",
    description: "Drink plenty of water throughout the day.",
    color: "bg-blue-50"
  },
  {
    icon: <IoSunnyOutline className="text-4xl text-orange-500" />,
    title: "Wear Sunscreen",
    description: "Use SPF 30 or higher to protect your skin.",
    color: "bg-orange-50"
  },
  {
    icon: <IoShirtOutline className="text-4xl text-blue-400" />,
    title: "Light Clothing",
    description: "Choose breathable fabrics like cotton.",
    color: "bg-sky-50"
  },
  {
    icon: <IoSnowOutline className="text-4xl text-blue-300" />,
    title: "Stay Cool",
    description: "Avoid direct sun during peak hours.",
    color: "bg-cyan-50"
  }
];

const SummerCareTips = () => {
  return (
    <section className="bg-sun-light/30 py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-black text-center text-sun-dark mb-16"
        >
          Summer Care Tips
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {tips.map((tip, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <motion.div 
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className={`mb-6 p-6 ${tip.color} rounded-2xl group-hover:scale-110 transition-transform duration-500`}
              >
                {tip.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-sun-dark mb-3 group-hover:text-sun-yellow transition-colors duration-300">
                {tip.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">{tip.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SummerCareTips;
