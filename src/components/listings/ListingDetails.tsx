import React from 'react';
import { Button } from "@/components/ui/button"; 
import { Avatar } from "@/components/ui/avatar";

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
          <Avatar src="https://picsum.photos/50/50" alt="Seller Avatar" />
          <span className="font-medium">John Doe</span>
        </div>
        <Button className="w-full" variant="green">
          <i className="fas fa-comments mr-2"></i>Contact Seller
        </Button>
      </div>
      
      <div className="flex space-x-2">
        <Button className="flex-grow" variant="gray" onClick={() => {/* Handle Save */}}>
          <i className="far fa-heart mr-2"></i>Save
        </Button>
        <Button className="flex-grow" variant="gray" onClick={() => {/* Handle Share */}}>
          <i className="fas fa-share-alt mr-2"></i>Share
        </Button>
      </div>
    </div>
  );
};

export default ListingDetails;
