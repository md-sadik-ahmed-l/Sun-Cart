"use client";
import { useState, useEffect } from "react";
import { Button } from "@heroui/react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineWbSunny } from "react-icons/md";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const slides = [
  {
    subtitle: "Exclusive Summer Sale",
    title: "50% OFF",
    highlight: "Limited Time Only",
    description: "Cool down with our exclusive deals on all selected summer essentials. Refresh your wardrobe today with our premium collection.",
    bg: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop",
    accent: "sun-yellow"
  },
  {
    subtitle: "Weekly Flash Sale",
    title: "Hot Deals 🔥",
    highlight: "Starting from $19.99",
    description: "Unbeatable prices on the season's most wanted items. Grab them before they're gone like the summer breeze!",
    bg: " https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=2070&auto=format&fit=crop",
    accent: "orange-500"
  },
  {
    subtitle: "New Collection 2026",
    title: "Fresh Arrivals",
    highlight: "New Trends",
    description: "Explore our new summer collection and stay stylish in the heat. Discover the latest tropical patterns and breathable fabrics.",
    bg: "https://images.unsplash.com/photo-1520116468816-95b69f847357?q=80&w=2070&auto=format&fit=crop",
    accent: "cyan-400"
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 1.1
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.8 }
      }
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.8 }
      }
    })
  };

  const contentVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }
    }
  };

  return (
    <div className="relative w-full h-[75vh] md:h-[90vh] overflow-hidden bg-sun-dark">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110"
            style={{ backgroundImage: `url(${slides[current].bg})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-start">
            <motion.div 
              key={`content-${current}`}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              className="max-w-3xl space-y-4 md:space-y-8"
            >
              <div className="flex items-center gap-3">
                <motion.span 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="px-4 py-1.5 rounded-full bg-sun-yellow text-sun-dark text-xs md:text-sm font-black uppercase tracking-widest shadow-lg"
                >
                  {slides[current].highlight}
                </motion.span>
                <div className="h-[1px] w-12 bg-white/50"></div>
              </div>
              
              <div className="space-y-2">
                <h2 className="text-white/90 text-xl sm:text-2xl md:text-3xl font-medium tracking-wide drop-shadow-md">
                  {slides[current].subtitle}
                </h2>
                
                <h1 className="text-6xl sm:text-7xl md:text-9xl font-black text-white drop-shadow-2xl leading-[0.85] tracking-tighter">
                  {slides[current].title}
                </h1>
              </div>
              
              <p className="text-lg sm:text-xl md:text-2xl text-white/80 font-light drop-shadow-md max-w-xl leading-relaxed">
                {slides[current].description}
              </p>
              
              <div className="pt-4 md:pt-6 flex flex-wrap gap-5">
                <Link href="/products">
                  <Button className="bg-sun-yellow text-sun-dark font-black text-base md:text-lg px-10 md:px-14 py-7 md:py-8 rounded-full shadow-[0_15px_35px_rgba(255,193,7,0.4)] hover:bg-sun-yellow-hover hover:scale-105 transition-all">
                    Shop Now
                  </Button>
                </Link>
                <Link href="/products">
                  <Button variant="bordered" className="text-white border-white/40 backdrop-blur-md font-bold text-base md:text-lg px-10 md:px-12 py-7 md:py-8 rounded-full hover:bg-white hover:text-sun-dark transition-all">
                    Learn More
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button 
        onClick={prevSlide}
        className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-black/20 backdrop-blur-xl border border-white/10 text-white hover:bg-sun-yellow hover:text-sun-dark transition-all group"
      >
        <FiChevronLeft className="text-2xl md:text-3xl group-hover:-translate-x-1 transition-transform" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-black/20 backdrop-blur-xl border border-white/10 text-white hover:bg-sun-yellow hover:text-sun-dark transition-all group"
      >
        <FiChevronRight className="text-2xl md:text-3xl group-hover:translate-x-1 transition-transform" />
      </button>

      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-6 z-30">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > current ? 1 : -1);
              setCurrent(idx);
            }}
            className="group relative"
          >
            <div className={`transition-all duration-700 rounded-full ${idx === current ? 'w-12 h-2 bg-sun-yellow' : 'w-2 h-2 bg-white/40 group-hover:bg-white'}`} />
          </button>
        ))}
      </div>

      
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -right-20 z-20 pointer-events-none opacity-10"
      >
         <MdOutlineWbSunny className="text-[400px] text-sun-yellow" />
      </motion.div>
      
      
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-sun-yellow rounded-full" />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;

