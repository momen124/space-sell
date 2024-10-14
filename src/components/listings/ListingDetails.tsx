import React from 'react';

const ListingDetails: React.FC<{
  title: string;
  price: string;
  location: string;
  postDate: string;
  seller: { name: string; avatar: string };
}> = ({ title, price, location, postDate, seller }) => {
  return (
    <div className="md:w-1/3 p-6 bg-white rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="text-2xl font-semibold text-blue-600 mb-2">{price}</p>
      <p className="text-gray-600 mb-2">{location}</p>
      <p className="text-gray-500 mb-4">Posted {postDate}</p>
      <div className="flex items-center mb-4">
        <img src={seller.avatar} alt="Seller Avatar" className="w-10 h-10 rounded-full mr-2" />
        <span>{seller.name}</span>
      </div>
      <button className="bg-green-500 text-white w-full py-2 rounded-lg">Contact Seller</button>
      <div className="flex mt-2 space-x-2">
        <button className="bg-gray-200 w-1/2 py-2 rounded-lg">Save</button>
        <button className="bg-gray-200 w-1/2 py-2 rounded-lg">Share</button>
      </div>
    </div>
  );
};

export default ListingDetails;