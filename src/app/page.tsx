import { getCategories, getProducts } from '@/lib/api';

export const dynamic = 'force-dynamic'


import ProductsContainer from '@/components/ProductsContainer';

const ProductsPage = async () => {
  const [products, categories] = await Promise.all([
    getProducts({
      search: '',
      minPrice: '',
      maxPrice: '',
      location: '',
      category: '',
    }),
    getCategories(),
  ]);
  return (
    <ProductsContainer initialProducts={products} categories={categories}/>
  );
};

export default ProductsPage;
