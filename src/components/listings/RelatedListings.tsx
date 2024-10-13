import React from 'react';
import Link from 'next/link';

interface Listing {
  id: string;
  title: string;
  price: string;
  location: string;
  imgSrc: string;
}

const RelatedListings: React.FC<{ listings: Listing[] }> = ({ listings }) => {
  return (
    <section className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">Related Listings</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {listings.map((listing) => (
          <Link href={`/listing/${listing.id}`} key={listing.id}>
            <div className="border rounded-lg shadow hover:shadow-lg transition p-4">
              <img src={listing.imgSrc} alt={listing.title} className="w-full h-40 object-cover rounded mb-2" />
              <h3 className="font-semibold">{listing.title}</h3>
              <p className="text-gray-600">{listing.price}</p>
              <p className="text-sm text-gray-500">{listing.location}</p>
              <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded w-full">View Details</button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedListings;
