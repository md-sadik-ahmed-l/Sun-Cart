"use client";
import { useEffect, useRef } from "react";
import { Button } from "@heroui/react";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdOutlineWbSunny } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const sunRef = useRef(null);

  useEffect(() => {
    
    gsap.to(bgRef.current, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    
    gsap.to(sunRef.current, {
      y: 20,
      rotate: 15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div ref={containerRef} className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] overflow-hidden">
      
      <div 
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-110"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/20 md:bg-black/10"></div>
      </div>
      
      
      <div 
        ref={sunRef}
        className="absolute top-1/4 right-1/4 z-20 hidden lg:block opacity-70 pointer-events-none"
      >
        {/* <MdOutlineWbSunny className="text-8xl text-sun-yellow/40 blur-[1px]" /> */}
      </div>

      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-start">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl space-y-4 md:space-y-6"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-sun-yellow text-xl sm:text-2xl md:text-3xl font-bold tracking-wider drop-shadow-md uppercase"
          >
            Summer Sale
          </motion.h2>
          <motion.h1 
            variants={itemVariants}
            className="text-6xl sm:text-7xl md:text-9xl font-black text-white drop-shadow-lg leading-[0.9]"
          >
            50% OFF
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-white font-medium drop-shadow-md max-w-md"
          >
            Cool down with our exclusive deals on all selected summer essentials.
          </motion.p>
          <motion.div 
            variants={itemVariants}
            className="pt-4 md:pt-6"
          >
            <Link href="/products">
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 193, 7, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-sun-yellow text-sun-dark font-black text-base md:text-lg px-8 md:px-12 py-6 md:py-8 rounded-full shadow-2xl hover:bg-sun-yellow-hover transition-all">
                  Shop Now
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-sun-yellow shadow-md"
        />
        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white/50 hover:bg-white transition-colors cursor-pointer shadow-md" />
        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white/50 hover:bg-white transition-colors cursor-pointer shadow-md" />
      </div>
    </div>
  );
};

export default Hero;
