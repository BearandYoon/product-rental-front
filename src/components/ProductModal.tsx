'use client';

import Image from 'next/image';
import { Product } from '@/lib/types/product';
import React from 'react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}
const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      {
        !product ? (
          <div>No Product Detailed Information</div>
        ) : (
          <div className="bg-white p-4 rounded-md max-w-md w-full">
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-500">{product.category}</p>
            <p className="text-green-500 font-bold">${product.price}</p>
            <p className="text-grey-500">{product.location}</p>
            <p>{product.description}</p>
            <div className="relative w-full h-60 mb-4">
              <Image
                src={`/assets/images/${product.image}`}
                alt={product.name}
                fill
                className="w-full h-60 object-cover mb-4 rounded-md"
                placeholder="blur"
                blurDataURL="/assets/images/placeholder.jpg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <button
              className="bg-red-500 text-white py-1 px-4 rounded-md"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        )
      }
    </div>
  );
};

export default ProductModal;
