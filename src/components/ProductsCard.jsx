"use client";
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const ProductsCard = ({ product, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <Card className="border-none shadow-sm hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden bg-white group h-full">
        
        <div className="relative w-full aspect-[4/3] bg-sun-light p-6 flex items-center justify-center overflow-hidden">
          <motion.div
            className="w-full h-full relative"
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src={product.image || "/no-image-placeholder.png"}
              fill
              alt={product.name}
              className="object-contain"
            />
          </motion.div>
          
         
        </div>

        
        <div className="p-5 space-y-3">
          <div>
            <h3 className="font-bold text-xl text-sun-dark truncate group-hover:text-sun-yellow transition-colors duration-300">
              {product.name}
            </h3>
            <p className="text-gray-500 text-sm font-medium">{product.brand}</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-sun-yellow">
              <FaStar className="text-sm" />
              <span className="text-gray-700 font-semibold text-sm">{product.rating || "4.8"}</span>
            </div>
            <span className="text-2xl font-black text-sun-dark group-hover:scale-110 transition-transform duration-300 origin-right">
              ${product.price}
            </span>
          </div>

          <Link href={`/products/${product.id}`} className="block w-full pt-2">
            <motion.div
              whileTap={{ scale: 0.95 }}
              initial={{ y: 0 }}
              whileHover={{ y: -2 }}
            >
              <Button className="w-full bg-sun-dark text-white font-bold py-6 rounded-xl group-hover:bg-sun-yellow group-hover:text-sun-dark transition-all duration-300">
                View Details
              </Button>
            </motion.div>
          </Link>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProductsCard;
