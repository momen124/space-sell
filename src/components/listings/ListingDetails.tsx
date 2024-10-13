import React from 'react';

const ListingDetails: React.FC = () => {
  return (
    <div className="md:w-1/3 p-6">
      <h1 className="text-3xl font-bold mb-4">iPhone 12 Pro Max</h1>
      <p className="text-2xl font-semibold text-blue-600 mb-4">$999</p>
      <p className="text-gray-600 mb-4"><i className="fas fa-map-marker-alt mr-2"></i>New York, NY</p>
      <p className="text-gray-600 mb-4"><i className="fas fa-clock mr-2"></i>Posted 2 days ago</p>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Seller Information</h2>
        <div className="flex items-center mb-2">
          <img src="https://picsum.photos/50/50" alt="Seller Avatar" className="w-10 h-10 rounded-full mr-3" />
          <span className="font-medium">John Doe</span>
        </div>
        <button className="bg-green-500 text-white px-4 py-2 rounded w-full hover:bg-green-600">
          <i className="fas fa-comments mr-2"></i>Contact Seller
        </button>
      </div>
      <div className="flex space-x-2">
        <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded flex-grow hover:bg-gray-300">
          <i className="far fa-heart mr-2"></i>Save
        </button>
        <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded flex-grow hover:bg-gray-300">
          <i className="fas fa-share-alt mr-2"></i>Share
        </button>
      </div>
    </div>
  );
};

export default ListingDetails;
