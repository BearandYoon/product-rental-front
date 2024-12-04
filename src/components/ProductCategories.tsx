'use client';

import React from 'react';
import { Category } from '@/lib/types/product';

interface ProductCategoriesProps {
  categories: Category[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

const ProductCategories: React.FC<ProductCategoriesProps> = (
  {
    categories,
    selectedCategory,
    onCategorySelect,
  }
) => {
  return (
    <div className="flex gap-4 mb-4 flex-wrap">
      <button
        className={`px-4 py-2 rounded-md ${
          !selectedCategory
            ? 'text-black font-black'
            : 'text-gray-800'
        }`}
        onClick={() => onCategorySelect('')}
      >
        <span>All</span>
      </button>
      {categories.map((cat) => (
        <button
          key={cat.category}
          className={`px-4 py-2 rounded-md relative ${
            selectedCategory === cat.category
              ? 'text-black font-black'
              : 'text-gray-800'
          }`}
          onClick={() => onCategorySelect(cat.category)}
        >
          <span>{cat.category}</span>
          <span className={`ml-2 text-black font-black absolute right-0 top-0 ${
            selectedCategory === cat.category
              ? ''
              : 'hidden'
          }`} >{cat.count}</span>
        </button>
      ))}
    </div>
  );
};

export default ProductCategories;
