import { useCart } from '@/context/cart';
import useUser from '@/hooks/useUser';
import { Listing } from '@/types/Listing';
import React, { useState } from 'react';

const ListingDetails: React.FC<{
  title?: string;
  price?: string | null;
  location?: string;
  postDate?: string;
  seller?: { name: string; avatar: string };
  listing?: Listing
}> = ({ title, price, location, postDate, listing }) => {
  const {user} = useUser()
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  // const [selectedColor, setSelectedColor] = useState('M');

  // const colors = ['S', 'M', 'L', 'XL'];

  const handleAddToCart = () => {
    if (listing)
    addToCart(listing)
  };

  const handleBuyNow = () => {
    if (listing)
    addToCart(listing)
  };

  return (
    <div className="md:w-1/3 p-6 bg-white rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="text-2xl font-semibold text-blue-600 mb-2">${price}</p>
      <p className="text-gray-600 mb-2">{location}</p>
      {postDate && <p className="text-gray-500 mb-4">Posted {new Date(postDate).toLocaleString()}</p>}

      {/* Seller Info */}
      <div className="flex items-center mb-4">
        <span>{user?.name}</span>
      </div>

      {/* Colors */}
      {/* <div className="mb-4">
        <span className="font-semibold">Colours: </span>
        <div className="flex space-x-2 mt-2">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`w-8 h-8 rounded-full border ${
                selectedColor === color ? 'border-black' : 'border-gray-300'
              }`}
            >
              {color}
            </button>
          ))}
        </div>
      </div> */}

      {/* Quantity Selector */}
      <div className="mb-4 flex items-center">
        <span className="font-semibold mr-4">Quantity: </span>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          className="w-16 border rounded px-2 py-1"
        />
      </div>

      {/* Buttons */}
      <button
        onClick={handleBuyNow}
        className="bg-red-600 text-white w-full py-2 rounded-lg hover:bg-red-700 mb-4"
      >
        Buy Now
      </button>
      <button
        onClick={handleAddToCart}
        className="border w-full py-2 rounded-lg mb-2"
      >
        Add to Cart
      </button>

      {/* Save & Share */}
      <div className="flex mt-2 space-x-2">
        <button className="bg-gray-200 w-1/2 py-2 rounded-lg">Save</button>
        <button className="bg-gray-200 w-1/2 py-2 rounded-lg">Share</button>
      </div>

      {/* Delivery Information */}
      <div className="mt-4">
        <div className="border p-2 mb-2">
          <p className="font-semibold">Free Delivery</p>
          <p className="text-sm text-gray-500">Enter your postal code for Delivery Availability</p>
        </div>
        <div className="border p-2">
          <p className="font-semibold">Return Delivery</p>
          <p className="text-sm text-gray-500">Free 30 Days Delivery Returns. Details</p>
        </div>
      </div>
    </div>
  );
};

export default ListingDetails;
