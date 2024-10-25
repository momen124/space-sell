import { Category } from "./Category";

export interface Listing {
  id: string;
  title: string;
  price: number;
  description: string;
  priceAfterSale: string;
  featuredAt: Date | null;
  images: UploadedAttachment[];
  category: Category;
  createdAt: string;
}
