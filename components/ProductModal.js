import React from 'react';
import Image from 'next/image';

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-xl">&times;</button>
        <div className="w-full h-64 mb-4 relative">
          <Image
            src={product.image}
            alt={product.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
        <p className="text-gray-700 mb-4">${product.price}</p>
        <p className="text-gray-600">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductModal;
