export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  location: string;
  description: string;
  image: string;
}

export interface Category {
  category: string;
  count: number;
}

export interface Filter {
  search: string;
  minPrice: string;
  maxPrice: string;
  location: string;
  category: string;
}