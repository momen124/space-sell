
export interface ProductSectionProps {
  title: string;
  subtitle?: string;
  products: Product[];
  viewAllLink?: string;
  countdownTimer?: {
    hours: number;
    minutes: number;
    seconds: number;
  };
}



export interface Product {
  id: string;
  title: string;
  price: string;
  oldPrice?: string;
  imgSrc: string;
  link: string;
  category: string; 
}