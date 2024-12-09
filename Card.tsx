import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

// Product Card Component
const ProductCard = ({ image, name, price, category }:any) => (
  <div className="w-72 h-auto">
    <div className="w-72 h-72 mb-6 overflow-hidden">
      <image
        className="hover:scale-105 transition-transform duration-300"
        src={'/public/shoes.png'}
        alt={`${name} - ${category}`}
        width={300}
        height={300}
      />
    </div>
    <div className="flex justify-between items-center px-2 pt-2">
      <div className="text-base">{name}</div>
      <div className="text">{price}</div>
    </div>
    <div>
      <span className="text-sm text-gray-700 px-2">{category}</span>
    </div>
  </div>
);

const Card = () => {
  // Product data array
  const products = [
    {
      imageSrc: '/public/shoes1.png',
      name: 'Nike Air Max Pulse',
      price: '₹ 13,995',
      category: "Women's Shoes",
    },
    {
      imageSrc: '/public/shoes1.png',
      name: 'Nike Air Max Pulse',
      price: '₹ 13,995',
      category: "Men's Shoes",
    },
    {
      imageSrc: '/public/Image2.png',
      name: 'Nike Air Max Pulse',
      price: '₹ 16,996',
      category: "Women's Shoes",
    },
    {
      imageSrc: '/public/Image2.png',
      name: 'Nike Air Max Pulse',
      price: '₹ 16,996',
      category: "Men's Shoes",
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <div className="flex justify-between mt-28 px-10 lg:px-16">
        <div>
          <span className="text-lg font-semibold">Best of Air Max</span>
        </div>
        <div className="flex items-center">
          <span>Shop</span>
          <div className="p-2 bg-gray-100 text-zinc-400 rounded-full hover:bg-gray-200 hover:text-zinc-800 mx-3">
            <ChevronLeftIcon />
          </div>
          <div className="p-2 bg-gray-100 text-zinc-400 rounded-full hover:bg-gray-200 hover:text-zinc-800">
            <ChevronRightIcon />
          </div>
        </div>
      </div>

      {/* Product Cards Section */}
      <div className="flex justify-evenly flex-wrap gap-x-4 px-8 mt-10">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            Image src={product.imageSrc}
            name={product.name}
            price={product.price}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
