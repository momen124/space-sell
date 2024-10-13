import React from 'react';

const RelatedListings: React.FC = () => {
  const relatedListings = [
    { id: 2, title: 'iPhone 11 Pro', price: '$699', location: 'Brooklyn, NY', imageUrl: 'https://picsum.photos/300/200?random=5' },
    { id: 3, title: 'Samsung Galaxy S21', price: '$799', location: 'Manhattan, NY', imageUrl: 'https://picsum.photos/300/200?random=6' },
    { id: 4, title: 'Google Pixel 5', price: '$649', location: 'Queens, NY', imageUrl: 'https://picsum.photos/300/200?random=7' },
  ];

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold mb-4">Related Listings</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedListings.map((listing) => (
          <div key={listing.id} className="bg-white rounded shadow overflow-hidden">
            <img src={listing.imageUrl} alt={listing.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{listing.title}</h3>
              <p className="text-gray-600">{listing.price}</p>
              <p className="text-sm text-gray-500">{listing.location}</p>
              <a href={`/listing/${listing.id}`} className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedListings;
