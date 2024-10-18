// FeaturedListings.tsx

import React from "react";
import { RelatedListing } from "@/types/Listing";
import FeaturedListingCard from "./FeaturedListingCard ";

const featuredListings: RelatedListing[] = [
    {
      id: "1",
      title: "Samsung Galaxy S21",
      price: "$799",
      location: "Manhattan, NY",
      imgSrc: "https://images.unsplash.com/photo-1610140463262-3b5d1b6d4d8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHNhbXN1bmclMjBnYWxheHklMjBzMjF8ZW58MHx8fHwxNjc4MTI2NzU2&ixlib=rb-4.0.3&q=80&w=300",
    },
    {
      id: "2",
      title: "iPhone 12 Pro Max",
      price: "$999",
      location: "Brooklyn, NY",
      imgSrc: "https://images.unsplash.com/photo-1604200211273-9c60d8ff1161?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGlwaG9uZSUyMDEyfGVufDB8fHx8MTY3ODEyNjg0MA&ixlib=rb-4.0.3&q=80&w=300",
    },
    {
      id: "3",
      title: "Google Pixel 6",
      price: "$699",
      location: "Queens, NY",
      imgSrc: "https://images.unsplash.com/photo-1631057213231-c641e30233d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGdvb2dsZSUyMHBpeGVsJTIwNnx8ZW58MHx8fHwxNjc4MTI2ODc5&ixlib=rb-4.0.3&q=80&w=300",
    },
  ];
  

const FeaturedListings: React.FC = () => {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Featured Listings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {featuredListings.map((listing) => (
                    <FeaturedListingCard key={listing.id} listing={listing} />
                ))}
            </div>
        </section>
    );
};

export default FeaturedListings;
