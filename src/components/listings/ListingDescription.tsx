import React from 'react';

const ListingDescription: React.FC<{ description: string; features: string[] }> = ({ description, features }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 mt-6">
      <h2 className="text-xl font-bold mb-4">Description</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <h3 className="font-semibold mb-2">Key Features:</h3>
      <ul className="list-disc pl-5 space-y-1">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListingDescription;