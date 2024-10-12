export interface LoginFormInputs {
    email: string;
    password: string;
  }
  
  export interface LoginFormData {
    email: string;
    password: string;
  }
  
  export interface RegisterFormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }
  
  // src/types.ts

// Type for a listing
export type Listing = {
  id: string;
  title: string;
  image: string;
  price: string;
};

// Type for the header state
export type HeaderProps = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

// Type for the footer links
export type FooterLink = {
  title: string;
  url: string;
};

// Type for how it works steps
export type HowItWorksStep = {
  icon: React.ReactNode; // You can specify a specific type for your icons if needed
  title: string;
  description: string;
};

// Type for featured listings
export type FeaturedListingsProps = {
  featuredListings: Listing[];
};

// Type for hero section
export type HeroSectionProps = {
  title: string;
  subtitle: string;
};
