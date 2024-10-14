import React from 'react';

const UserListings: React.FC = () => {
    return (
        <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">My Listings</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((index) => (
                    <div key={index} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition duration-300">
                        <img
                            src={`https://picsum.photos/400/300?random=${index + 3}`}
                            alt={`Listing ${index}`}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="font-semibold text-lg mb-2">Listing Title {index}</h3>
                            <p className="text-gray-600 font-bold">${(index * 100) + 99}</p>
                            <p className="text-sm text-gray-500 mb-2">New York, NY</p>
                            <a href={`/listing/${index + 3}`} className="text-blue-500 hover:underline">
                                View Details
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default UserListings;
