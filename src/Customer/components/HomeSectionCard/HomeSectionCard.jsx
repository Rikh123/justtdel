import React from 'react';
import "./ProductCard.css"; // Make sure this file exists and contains relevant styles

const ProductCard = ({ product }) => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-2xl overflow-hidden w-[14.2rem] mx-3 transition-shadow duration-300 hover:shadow-xl'>
      <div className='h-[15rem] w-full border-black'>
        <img
          className='object-cover object-top w-full h-full'
          src={product.imageUrl} // Ensure this prop is passed correctly
          alt='Product'
        />
      </div>
      <div className='p-4 text-center'>
        <h3 className='text-lg font-medium text-gray-900'>{product.brand}</h3>
        <p className='mt-2 text-sm text-gray-500'>
          {product.title}
        </p>
        <p className='mt-2 text-sm text-gray-500'>
          Color: {product.color}
        </p>
        <p className='mt-2 text-lg font-semibold text-green-600'>
          ₹{product.discountedPrice} <span className="line-through text-red-500">₹{product.price}</span>
        </p>
        <p className='text-sm text-gray-500'>Discount: {product.discountPercent}%</p>
      </div>
    </div>
  );
};

export default ProductCard;
