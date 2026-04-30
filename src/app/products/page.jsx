import ProductsCard from '@/components/ProductsCard';
import React from 'react';

const ProductsPage = async() => {

    const res = await fetch("https://sun-cart-gold.vercel.app/data.json");
  const products = await res.json();
    
    return (
        <div className='container mx-auto my-10  p-2'>
            <h1 className='text-3xl font-bold my-5'>All Products</h1>
            <div className="flex flex-wrap justify-center  gap-5 sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {
                    products.map(product => <ProductsCard key={product.id} product ={product}></ProductsCard>)
                }
            </div>
        </div>
    );
};

export default ProductsPage;