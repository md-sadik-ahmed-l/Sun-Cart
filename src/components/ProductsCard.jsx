import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";

const ProductsCard = ({ product }) => {
  return (
    <div>
      <Card className="border rounded-xl">
        <div className="relative w-full aspect-square">
          <Image
            src={product.imageUrl || "/no-image-placeholder.png"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt={product.title}
            className="object-cover rounded-xl"
          />

          <Chip size="sm" className="absolute right-2 top-2">
            {product.category}
          </Chip>
        </div>

        <div>
          <h2 className="font-medium text-xl">{product.title}</h2>
        </div>

        <div className="flex gap-5">
          <div className="flex items-center gap-2">
            <p>
              <FaHeart />
            </p>
            <p>{product.likes}</p>
          </div>

          <Separator orientation="vertical" />

          <div className="flex items-center gap-2">

            <p>
              <BiDownload />
            </p>

            <p>{product.downloads}</p>
          </div>
        </div>

        <Link href={`/all-photos/${product.id}`} className="py-2 ">
          {" "}
          <Button variant="outline" className="w-full text-xl shadow-sm">
            View
          </Button>
        </Link>
      </Card>
      
    </div>
  );
};

export default ProductsCard;
