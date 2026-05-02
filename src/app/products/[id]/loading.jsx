"use client";
import { motion } from "framer-motion";

const DetailsLoading = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-10">
      
      
      <div>
        
        <div className="w-full h-[400px] bg-gray-200 rounded-xl animate-pulse"></div>

        
        <div className="flex gap-3 mt-4">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-[80px] h-[80px] bg-gray-200 rounded border animate-pulse"
            ></div>
          ))}
        </div>
      </div>

      
      <div className="space-y-4">
        
        
        <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse"></div>

        
        <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse"></div>

        
        <div className="h-4 w-1/3 bg-gray-200 rounded animate-pulse"></div>

        
        <div className="flex gap-3 items-center">
          <div className="h-6 w-24 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-5 w-16 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-5 w-20 bg-gray-200 rounded animate-pulse"></div>
        </div>

        
        <div className="space-y-2">
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse"></div>
        </div>

       
        <div className="space-y-2">
          <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 w-1/3 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse"></div>
        </div>

        
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-200 rounded animate-pulse"></div>
          <div className="w-6 h-6 bg-gray-200 rounded animate-pulse"></div>
          <div className="w-8 h-8 bg-gray-200 rounded animate-pulse"></div>
        </div>

        
        <div className="space-y-3 pt-3">
          <div className="h-12 w-full bg-gray-300 rounded-lg animate-pulse"></div>
          <div className="h-12 w-full bg-gray-200 rounded-lg animate-pulse"></div>
        </div>
      </div>

      <motion.div
        className="fixed bottom-10 right-10 w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
    </div>
  );
};

export default DetailsLoading;