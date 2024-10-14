// src/components/AdditionalFeaturedListings.tsx

import React from 'react';
import Link from 'next/link';

interface Listing {
  id: number;
  image: string;
  title: string;
  price: string;
}

interface Props {
  featuredListings: Listing[];
}

const AdditionalFeaturedListings: React.FC<Props> = ({ featuredListings }) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">More Featured Items</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {featuredListings.map((listing: Listing) => (
          <Link
            href={`/listing/${listing.id}`}
            key={listing.id}
            className="border p-4 rounded-lg hover:shadow-md transition-shadow"
          >
            <img
              src={listing.image}
              alt={listing.title}
              className="w-full h-40 object-cover mb-2 rounded"
            />
            <h3 className="font-semibold">{listing.title}</h3>
            <p className="text-lg font-bold text-green-600">{listing.price}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default AdditionalFeaturedListings;
