
import { Button } from "@heroui/react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')] h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center  shadow-2xl ">
      <div className="w-full h-full rounded-lg bg-black/50 flex items-center ">
        <div className="max-w-7xl mx-auto px-6 text-white">

         

           <div className="flex flex-wrap justify-between gap-10">
             <div className="flex flex-col justify-center items-center space-y-3">
                <h1 className="text-3xl md:text-5xl font-bold  max-w-2xl">
                    Summer sale
                </h1>

                <h1 className="text-5xl sm:text-8xl font-extrabold">50% OFF</h1>

                <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
                    On Selected Items
                </p>

             </div>

            <div className="flex items-end-safe gap-2 sm:gap-4">
              <Link href="/products">
                <Button className="bg-linear-to-r from-pink-500 via-purple-500 bg-red-500">
                  Shop Now
                </Button>
              </Link>

              <Link href="/products">
                <Button variant="outline" className="text-white">
                  View Products
                </Button>
              </Link>
            </div>
           </div>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
