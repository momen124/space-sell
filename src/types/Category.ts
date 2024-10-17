import { Product } from "./ProductSection";

export interface Category {
    name: string;
    icon: string;
    link: string;
  }

  export interface CategoryCardProps {
    category: {
      name: string;
      icon: string;
      link: string;
    };
  }


 export interface CategoryPageProps {
    categoryName: string;
    products: Product[];
  }
  