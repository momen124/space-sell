import React from "react";

const MyCancellations: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">My Cancellations</h2>
      <div className="border p-4 rounded-lg shadow-lg bg-white space-y-4">
        <div className="border-b pb-4">
          <h3 className="font-semibold text-lg">Cancellation #67890</h3>
          <p>Date: 11/20/2023</p>
          <p>Status: <span className="text-gray-600">Cancelled</span></p>
          <button className="text-blue-600 hover:underline mt-2">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default MyCancellations;
