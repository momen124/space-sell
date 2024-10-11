
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
  export interface Listing {
    id: number;
    title: string;
    price: string;
    image: string;
  }
  // Type for the return value of getFeatureListings function
export type FeatureListingsResult = Listing[];

// Type for the state of featuredListings
export type FeaturedListingsState = Listing[];

export interface IconProps {
  className?: string;
}
export interface HeaderLink {
  href: string;
  text: string;
}
export interface QuickLink {
  href: string;
  text: string;
}
export interface HowItWorksItem {
  title: string;
  description: string;
}

  