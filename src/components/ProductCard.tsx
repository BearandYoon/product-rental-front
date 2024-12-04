'use client';
import { Product } from '@/lib/types/product';
import Image from 'next/image';
import React from 'react';

interface ProductCardProps {
  product: Product;
  onOpenModal: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenModal } ) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <div className="relative w-full h-40 mb-4">
        <Image
          src={`/assets/images/${product.image}`}
          alt={product.name}
          className="w-full h-40 object-cover mb-4 rounded-md"
          placeholder="blur"
          blurDataURL="/assets/images/placeholder.jpg"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          suppressHydrationWarning
        />
      </div>
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-gray-500">{product.category}</p>
      <p className="text-green-500 font-bold">${product.price}</p>
      <button
        className="mt-2 bg-blue-500 text-white py-1 px-4 rounded-md"
        onClick={() => onOpenModal(product)}
      >
        Details
      </button>
    </div>
  );
};

export default ProductCard;
