// src/components/FeaturedListingCard.tsx
import React from "react";
import Link from "next/link";

interface FeaturedListingCardProps {
    listing: {
        id: string;
        title: string;
        price: string;
        location: string;
        imgSrc: string;
        link: string;
    };
}

const FeaturedListingCard: React.FC<FeaturedListingCardProps> = ({ listing }) => {
    return (
        <Link href={`/listing/${listing.id}`} className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
            <img src={listing.imgSrc} alt={listing.title} className="w-full h-48 object-cover rounded-t-lg mb-2" />
            <h3 className="font-semibold">{listing.title}</h3>
            <p className="text-gray-600">{listing.price}</p>
            <p className="text-gray-500">{listing.location}</p>
        </Link>
    );
};

export default FeaturedListingCard;