import React from "react";

const MyOrders: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">My Orders</h2>
      <div className="border p-4 rounded-lg shadow-lg bg-white space-y-4">
        <div className="border-b pb-4">
          <h3 className="font-semibold text-lg">Order #12345</h3>
          <p>Date: 01/10/2024</p>
          <p>Status: <span className="text-green-600">Delivered</span></p>
          <button className="text-blue-600 hover:underline mt-2">View Details</button>
        </div>
        <div className="border-b pb-4">
          <h3 className="font-semibold text-lg">Order #12346</h3>
          <p>Date: 12/15/2023</p>
          <p>Status: <span className="text-yellow-600">In Transit</span></p>
          <button className="text-blue-600 hover:underline mt-2">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
