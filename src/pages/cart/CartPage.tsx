import React, { useState } from 'react';
import CartItem from '@/components/cart/CartItem';
import CartSummary from '@/components/cart/CartSummary';

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState([
    {
      name: 'LCD Monitor',
      price: 650,
      quantity: 1,
      imgSrc: '/images/lcd-monitor.jpg',
    },
    {
      name: 'Hi Gamepad',
      price: 550,
      quantity: 2,
      imgSrc: '/images/hi-gamepad.jpg',
    },
  ]);

  const handleQuantityChange = (index: number, quantity: number) => {
    const updatedItems = [...cartItems];
    updatedItems[index].quantity = quantity;
    setCartItems(updatedItems);
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      <div className="flex flex-wrap -mx-4">
        {/* Cart Items */}
        <div className="w-full lg:w-3/4 px-4 mb-6 lg:mb-0">
          <div className="border p-4">
            {/* Header Row */}
            <div className="flex items-center justify-between border-b pb-2 mb-4">
              <span>Product</span>
              <span className="w-20 text-center">Price</span>
              <span>Quantity</span>
              <span className="w-20 text-center">Subtotal</span>
            </div>
            {/* Cart Items */}
            {cartItems.map((item, index) => (
              <CartItem
                key={index}
                product={item}
                onQuantityChange={(quantity) => handleQuantityChange(index, quantity)}
              />
            ))}
            {/* Action Buttons */}
            <div className="flex justify-between mt-4">
              <button className="border border-gray-300 rounded px-4 py-2 hover:bg-gray-200">
                Return To Shop
              </button>
              <button className="border border-gray-300 rounded px-4 py-2 hover:bg-gray-200">
                Update Cart
              </button>
            </div>
          </div>
          {/* Coupon Code Section */}
          <div className="flex mt-4 space-x-4">
            <input
              type="text"
              placeholder="Coupon Code"
              className="flex-1 border px-4 py-2 rounded"
            />
            <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">
              Apply Coupon
            </button>
          </div>
        </div>
        {/* Cart Summary */}
        <div className="w-full lg:w-1/4 px-4">
          <CartSummary subtotal={subtotal} shipping="Free" />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
