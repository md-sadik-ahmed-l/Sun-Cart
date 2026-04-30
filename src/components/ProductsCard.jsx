import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { BiDollar, BiStar } from "react-icons/bi";

const ProductsCard = ({ product }) => {
  return (
    <div>
      <Card className="border ml-2 rounded-xl  max-w-85 ">

        <div className="relative w-full  aspect-square">

          <Image
            src={product.image || "/no-image-placeholder.png"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt={product.name}
            className="object-cover rounded-xl"
          />

          <Chip size="sm" className="absolute right-2 top-2">

            {product.category}

          </Chip>

        </div>

        <div>
          <h2 className="font-medium text-2xl">{product.name}</h2>
        </div>

        <div className="">
          <div className="flex items-center gap-2">
            <p>
              <FaHeart />
            </p>
            <p>{product.brand}</p>
          </div>

          <Separator orientation="vertical" />

          <div className="flex items-center justify-between">

            <div className="flex items-center text-2xl">
              <p>
                <BiDollar />
              </p>

              <p>{product.price}</p>
            </div>

           <div className="flex items-center gap-1">
            <BiStar></BiStar>
             <p>{product.rating}</p>
           </div>
            
          </div>
        </div>

        <Link href={`/products/${product.id}`} className="py-2 ">
          
          <Button variant="outline" className="w-full text-xl shadow-sm">
            View Details
          </Button>
        </Link>
      </Card>
      
    </div>
  );
};

export default ProductsCard;
