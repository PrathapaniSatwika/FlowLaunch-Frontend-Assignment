import React from 'react';
import Image from 'next/image';

const ProductCard = ({ product, onClick }) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg" onClick={() => onClick(product)}>
      <div className="w-full h-48 mb-4 relative">
        <Image
          src={product.image}
          alt={product.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <h2 className="text-lg font-bold">{product.title}</h2>
      <p className="text-gray-700">${product.price}</p>
    </div>
  );
};

export default ProductCard;
