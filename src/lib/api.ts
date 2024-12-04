import { API } from '@/lib/utils/axios';
import { Category, Filter, Product } from '@/lib/types/product';

export const getProducts = async (filters: Filter) => {
  const response = await API.get<Product[]>(
    `/products?search=${filters.search}&minPrice=${filters.minPrice}&maxPrice=${filters.maxPrice}&location=${filters.location}&category=${filters.category}`);
  return response.data;
}

export const getCategories = async () => {
  const response = await API.get<Category[]>(`/products/categories`);
  return response.data;
}