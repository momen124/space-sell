import React from "react";

const AddressBook: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Address Book</h2>
      <div className="border p-4 rounded-lg shadow-lg bg-white space-y-4">
        <div className="border-b pb-4">
          <h3 className="font-semibold text-lg">Home Address</h3>
          <p>123 Street Name, City, Country</p>
          <button className="text-blue-600 hover:underline mt-2">Edit</button>
        </div>
        <div className="border-b pb-4">
          <h3 className="font-semibold text-lg">Office Address</h3>
          <p>456 Another St, City, Country</p>
          <button className="text-blue-600 hover:underline mt-2">Edit</button>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Add New Address</button>
      </div>
    </div>
  );
};

export default AddressBook;
