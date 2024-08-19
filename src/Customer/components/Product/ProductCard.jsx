import React from 'react';
import "./ProductCard.css"; // Make sure this file contains additional styles if needed

const ProductCard = ({ product }) => {
  return (
    <div className='product-card cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden w-[14rem] mx-3 transition-shadow duration-300 hover:shadow-2xl'>
      {/* Product Image */}
      <div className='h-[15rem] w-full'>
        <img
          className='object-cover object-top w-full h-full'
          src={product.imageUrl} // Ensure this prop is passed correctly
          alt={product.title}
        />
      </div>
      
      {/* Product Information */}
      <div className='p-4 text-center'>
        <h3 className='text-lg font-medium text-gray-900'>{product.brand}</h3>
        <p className='mt-2 text-sm text-gray-500'>{product.title}</p>
        <p className='mt-2 text-sm text-gray-500'>Color: {product.color}</p>
        
        {/* Price with discount */}
        <p className='mt-2 text-lg font-semibold text-green-600'>
          ₹{product.discountedPrice.toLocaleString('en-IN')}{" "}
          <span className="line-through text-red-500">
            ₹{product.price.toLocaleString('en-IN')}
          </span>
        </p>

        {/* Discount Percent */}
        <p className='text-sm text-gray-500'>
          Discount: {product.discountPercent}%
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
