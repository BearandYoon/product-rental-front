'use client';
import { Filter } from '@/lib/types/product';
import React, { Dispatch, SetStateAction } from 'react';

interface ProductFiltersProps {
  filters: Filter;
  setFilters: Dispatch<SetStateAction<Filter>>;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({ filters, setFilters } ) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white p-4 shadow-md mb-4 rounded-md flex flex-row gap-4 justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <input
          type="text"
          name="search"
          placeholder="Search..."
          value={filters.search}
          onChange={handleInputChange}
          className="border p-2 rounded-md"
        />
        <input
          type="number"
          name="minPrice"
          placeholder="Min Price"
          value={filters.minPrice}
          onChange={handleInputChange}
          className="border p-2 rounded-md"
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          value={filters.maxPrice}
          onChange={handleInputChange}
          className="border p-2 rounded-md"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={filters.location}
          onChange={handleInputChange}
          className="border p-2 rounded-md"
        />
      </div>
    </div>
  );
};

export default ProductFilters;
