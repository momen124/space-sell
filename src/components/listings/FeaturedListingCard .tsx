// src/components/FeaturedListingCard.tsx

import React from "react";

interface FeaturedListingCardProps {
    listing: {
        title: string;
        price: string;
        location: string;
        imgSrc: string;
        link: string;
    };
}

const FeaturedListingCard: React.FC<FeaturedListingCardProps> = ({ listing }) => {
    return (
        <a href={listing.link} className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
            <img src={listing.imgSrc} alt={listing.title} className="w-full h-48 object-cover rounded-t-lg mb-2" />
            <h3 className="font-semibold">{listing.title}</h3>
            <p className="text-gray-600">{listing.price}</p>
            <p className="text-gray-500">{listing.location}</p>
        </a>
    );
};

export default FeaturedListingCard;
