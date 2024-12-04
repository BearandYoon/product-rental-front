'use client';

import React, { useEffect, useRef, useState } from 'react';
import ProductCard from '@/components/ProductCard';
import ProductFilters from '@/components/ProductFilters';
import Loader from '@/components/Loader';
import { getProducts } from '@/lib/api';
import { Category, Filter, Product } from '@/lib/types/product';
import ProductModal from '@/components/ProductModal';
import { useDebounceCallback } from 'usehooks-ts'
import ProductCategories from '@/components/ProductCategories';

interface ProductsContainerProps {
  initialProducts :  Product[];
  categories: Category[];
}
const ProductsContainer: React.FC<ProductsContainerProps> = ({ initialProducts, categories }) => {
  const isInitialMount = useRef(true);
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState<Filter>({
    search: '',
    minPrice: '',
    maxPrice: '',
    location: '',
    category: '',
  });
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const products = await getProducts(filters);
      setProducts(products);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };


  const debouncedFetchProducts = useDebounceCallback(fetchProducts, 200)

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      debouncedFetchProducts();
    }
  }, [filters]);

  const handleCategoryClick = (category: string) => {
    setFilters({ ...filters, category });
  };

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product Rental Platform</h1>
      <ProductCategories
        categories={categories}
        selectedCategory={filters.category}
        onCategorySelect={handleCategoryClick}
      />
      <ProductFilters filters={filters} setFilters={setFilters}/>
      {loading ? (
        <Loader/>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onOpenModal={openModal}/>
          ))}
        </div>
      )}
      {isModalOpen && (
        <ProductModal product={selectedProduct} onClose={closeModal}/>
      )}
    </div>
  );
};

export default ProductsContainer;
