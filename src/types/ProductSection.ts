import { Listing } from "./Listing";

export interface ProductSectionProps {
  title: string;
  subtitle?: string;
  products?: Listing[];
  viewAllLink?: string;
  countdownTimer?: string;
  isLoading?: boolean;
}
