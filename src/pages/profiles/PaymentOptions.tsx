import React from "react";

const PaymentOptions: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">My Payment Options</h2>
      <div className="border p-4 rounded-lg shadow-lg bg-white space-y-4">
        <div className="border-b pb-4">
          <h3 className="font-semibold text-lg">Visa Ending in 1234</h3>
          <p>Expiry Date: 05/26</p>
          <button className="text-blue-600 hover:underline mt-2">Edit</button>
          <button className="text-red-600 hover:underline ml-4">Remove</button>
        </div>
        <div className="border-b pb-4">
          <h3 className="font-semibold text-lg">Mastercard Ending in 5678</h3>
          <p>Expiry Date: 11/25</p>
          <button className="text-blue-600 hover:underline mt-2">Edit</button>
          <button className="text-red-600 hover:underline ml-4">Remove</button>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Add New Payment Method</button>
      </div>
    </div>
  );
};

export default PaymentOptions;
