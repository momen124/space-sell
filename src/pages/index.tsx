import React, { useState, useEffect } from "react";
import Header from "../components/layout/Header";
import HeroSection from "../components/hero/HeroSection";
import FeaturedListings from "../components/listings/FeaturedListings";
import HowItWorks from "../components/howItWorks/HowItWorks";

import CallToAction from "../components/callToAction/CallToAction";
import Footer from "../components/layout/Footer";
import { useForm, Controller } from "react-hook-form";
import { Input, Button } from "@/components/ui"; // Assuming you have a central UI component file

// Define a type for the listing item
export interface Listing {
  id: number;
  title: string;
  price: string;
  image: string;
}

// Simulate fetching data with a defined type
async function getFeatureListings(): Promise<Listing[]> {
  // In a real app, this would fetch from an API or database
  return [
    { id: 1, title: "Spaceship X2000", price: "$999,999", image: "/placeholder.svg?height=200&width=300" },
    { id: 2, title: "Moon Rover", price: "$50,000", image: "/placeholder.svg?height=200&width=300" },
    { id: 3, title: "Space Suit", price: "$25,000", image: "/placeholder.svg?height=200&width=300" },
  ];
}

const HomePage: React.FC = () => {
  const [featuredListings, setFeaturedListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { control, handleSubmit } = useForm();

  useEffect(() => {
    async function fetchListings() {
      const listings = await getFeatureListings();
      setFeaturedListings(listings);
      setLoading(false);
    }

    fetchListings();
  }, []);

  const onSearchSubmit = (data: any) => {
    console.log("Searching for:", data.search); // Handle search query here
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="bg-gray-100 font-sans">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <HeroSection />
        {/* Search Form */}
        <form onSubmit={handleSubmit(onSearchSubmit)} className="flex mb-4">
          <Controller
            name="search"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                placeholder="Search for items..."
                className="flex-1 rounded-r-none"
              />
            )}
          />
          <Button type="submit" className="rounded-l-none">
            Search
          </Button>
        </form>
        <FeaturedListings featuredListings={featuredListings} />
        <HowItWorks />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
