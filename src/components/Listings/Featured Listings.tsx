// src/components/FeaturedListings.tsx

import React from 'react';
import Link from 'next/link';

interface Listing {
  id: string;
  title: string;
  price: string;
  image: string;
}

interface FeaturedListingsProps {
  featuredListings: Listing[];
}

const FeaturedListings: React.FC<FeaturedListingsProps> = ({ featuredListings }) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">Featured Listings</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredListings.map((listing: Listing) => (
          <Link href={`/listing/${listing.id}`} key={listing.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <img src={listing.image} alt={listing.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{listing.title}</h3>
              <p className="text-xl font-bold text-blue-600">{listing.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedListings;
