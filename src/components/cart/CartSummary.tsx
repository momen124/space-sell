import React from 'react';

interface CartSummaryProps {
  subtotal: number;
  shipping: string;
}

const CartSummary: React.FC<CartSummaryProps> = ({ subtotal, shipping }) => {
  const total = subtotal; // Assuming shipping is free for now.

  return (
    <div className="border p-4">
      <h3 className="font-semibold text-xl mb-4">Cart Total</h3>
      <div className="mb-2">
        <span className="block text-gray-700">Subtotal:</span>
        <span className="block text-right font-semibold">${subtotal}</span>
      </div>
      <div className="mb-2">
        <span className="block text-gray-700">Shipping:</span>
        <span className="block text-right font-semibold">{shipping}</span>
      </div>
      <div className="mb-4">
        <span className="block text-gray-700">Total:</span>
        <span className="block text-right font-semibold">${total}</span>
      </div>
      <button className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700">
        Proceed to checkout
      </button>
    </div>
  );
};

export default CartSummary;
