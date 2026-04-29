import Hero from "@/components/Hero";
import ProductsCard from "@/components/ProductsCard";
import React from "react";
import Link from "next/link";

const HomePage = async () => {
  const res = await fetch("https://sun-cart-gold.vercel.app/data.json");
  const products = await res.json();
  const topProduct = products.slice(0, 4);

  return (
    <div>
      <Hero></Hero>

      <div className="container mx-auto">
        <h1 className="font-bold text-4xl mt-10 mb-5">Top Products</h1>
        <div className="grid grid-cols-4 gap-5">
          {topProduct.map((product) => (
            <ProductsCard key={product.id} product={product}></ProductsCard>
          ))}
        </div>
        <div className="flex justify-center items-center ">
          <Link
            href={"/all-photos"}
            className="border mt-10 text-xl font-medium py-3 px-9 rounded-full shadow-md bg-linear-to-r from-pink-500 via-purple-500 bg-red-500 text-white"
          >
            All Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
