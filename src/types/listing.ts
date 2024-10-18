// src/types/Listing.ts

export interface Listing {
  id: string;  // Ensure that 'id' is consistently a string.
  title: string;
  price: string;  // Use 'string' for price to maintain consistency.
  location: string;
  imgSrc: string; // Add this to fix the error
  postDate?: string; // Optional in case some listings don't have post dates.
  seller?: {
    name: string;
    avatar: string;
  };
  images?: string[];
  description?: string;
  features?: string[];
}

export interface RelatedListing {
  id: string;
  title: string;
  price: string;
  location: string;
  imgSrc: string;
}

export interface FeaturedListingCardProps {
  listing: RelatedListing;
}
