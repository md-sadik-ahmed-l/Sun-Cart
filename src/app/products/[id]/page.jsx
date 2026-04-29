import Image from "next/image";

const DetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch("https://sun-cart-gold.vercel.app/data.json", {
    cache: "no-store",
  });
  const products = await res.json();

  const product = products.find(
    (item) => item.id.toString() === id
  );

  if (!product) {
    return <div className="p-10 text-center">Product not found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-10">
     
      
      <div>
        <div className="relative w-full h-100 rounded-xl overflow-hidden border">
          <Image
            src={product?.image}
            alt={product?.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex gap-3 mt-4">
          <Image src={product?.image} width={80} height={80} alt="" className="rounded border" />
          <Image src={product?.image} width={80} height={80} alt="" className="rounded border" />
          <Image src={product?.image} width={80} height={80} alt="" className="rounded border" />
        </div>
      </div>

     
      <div>
        <h1 className="text-2xl font-bold">{product?.name}</h1>
        <p className="text-gray-500">{product?.brand}</p>

        <p className="text-yellow-500 my-2">
          ⭐ {product?.rating} (120 Reviews)
        </p>

        <div className="flex items-center gap-3 my-3">
          <span className="text-2xl font-bold text-green-600">
            ${product?.price}
          </span>
          <span className="line-through text-gray-400">$30</span>
          <span className="text-red-500">50% OFF</span>
        </div>

        <p className="text-gray-600 mb-4">{product?.description}</p>

        <div className="space-y-2 text-sm mb-4">
          <p>📦 Category: {product?.category}</p>
          <p className="text-green-600">✔ {product?.stock} in stock</p>
          <p>🏷 Brand: {product?.brand}</p>
        </div>

        <div className="flex items-center gap-3 mb-6">
          <button className="px-3 py-1 border rounded">-</button>
          <span>1</span>
          <button className="px-3 py-1 border rounded">+</button>
        </div>

        <button className="w-full bg-blue-900 text-white py-3 rounded-lg mb-3">
          Add to Cart
        </button>
        <button className="w-full bg-yellow-400 py-3 rounded-lg font-semibold">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default DetailsPage;