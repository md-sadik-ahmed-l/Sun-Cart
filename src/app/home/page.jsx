import Hero from "@/components/Hero";
import ProductsCard from "@/components/ProductsCard";
import SummerCareTips from "@/components/SummerCareTips";
import TopBrands from "@/components/TopBrands";
import React from "react";
import Link from "next/link";

const HomePage = async () => {
  let products = [];
  try {
    const res = await fetch("https://sun-cart-gold.vercel.app/data.json", { cache: 'no-store' });
    products = await res.json();
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }
  
  const popularProducts = products.slice(0, 3); // Showing 3 as per the image

  return (
    <main className="min-h-screen overflow-hidden">
      <Hero />

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-sun-dark">Popular Products</h2>
            <Link 
              href="/products" 
              className="text-sun-yellow font-black text-xl hover:underline transition-all"
            >
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
            {popularProducts.map((product, index) => (
              <ProductsCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      <SummerCareTips />
      <TopBrands />
    </main>
  );
};

export default HomePage;
