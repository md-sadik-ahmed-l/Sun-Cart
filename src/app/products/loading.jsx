"use client";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="container mx-auto my-10 p-4">
      
      <div className="h-8 w-48 bg-gray-200 rounded-md mb-8 animate-pulse"></div>

      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="rounded-2xl bg-white shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            
            <div className="aspect-[4/3] bg-gray-200 animate-pulse"></div>

            
            <div className="p-4 space-y-3">
              <div className="h-5 w-3/4 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse"></div>

              <div className="flex justify-between items-center">
                <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-6 w-20 bg-gray-200 rounded animate-pulse"></div>
              </div>

              <div className="h-10 w-full bg-gray-300 rounded-xl animate-pulse"></div>
            </div>
          </motion.div>
        ))}
      </div>

      
      <div className="flex justify-center mt-10">
        <motion.div
          className="w-10 h-10 border-4 border-sun-yellow border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
      </div>
    </div>
  );
};

export default Loading;