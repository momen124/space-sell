// src/components/FeaturedListings.tsx

import React from "react";
import FeaturedListingCard from "./FeaturedListingCard ";

interface Listing {
    title: string;
    price: string;
    location: string;
    imgSrc: string;
    link: string;
}

const featuredListings: Listing[] = [
    {
        title: "Samsung Galaxy S21",
        price: "$799",
        location: "Manhattan, NY",
        imgSrc: "https://picsum.photos/300/200?random=1",
        link: "/listing/3",
    },
    {
        title: "Leather Sofa",
        price: "$499",
        location: "Brooklyn, NY",
        imgSrc: "https://picsum.photos/300/200?random=2",
        link: "/listing/4",
    },
    {
        title: "2018 Honda Accord",
        price: "$22,000",
        location: "Queens, NY",
        imgSrc: "https://picsum.photos/300/200?random=3",
        link: "/listing/5",
    },
];

const FeaturedListings: React.FC = () => {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Featured Listings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {featuredListings.map((listing) => (
                    <FeaturedListingCard key={listing.title} listing={listing} />
                ))}
            </div>
        </section>
    );
};

export default FeaturedListings;
