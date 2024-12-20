// pages/cart/CartPage.tsx
import CartItem from '@/components/cart/CartItem';
import CartSummary from '@/components/cart/CartSummary';
import React from 'react';
import { useCart } from '../../context/cart';

const CartPage: React.FC = () => {
  const { items, updateQuantity, totalPrice } = useCart();

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
        <div className="flex flex-wrap -mx-4">
          {/* Cart Items */}
          <div className="w-full lg:w-3/4 px-4 mb-6 lg:mb-0">
            {items.length > 0 ? (
              <div className="border p-4">
                {/* Header Row */}
                <div className="flex items-center justify-between border-b pb-2 mb-4">
                  <span className="font-semibold">Product</span>
                  <span className="w-20 text-center font-semibold">Price</span>
                  <span className="font-semibold">Quantity</span>
                  <span className="w-20 text-center font-semibold">Subtotal</span>
                </div>
                {/* Cart Items */}
                {items.map((item, index) => (
                  <CartItem
                    key={index}
                    product={{
                      name: item.title,
                      price: item.price,
                      quantity: item.quantity,
                      imgSrc: item.imgSrc,
                    }}
                    onQuantityChange={(quantity) => updateQuantity(item.id, quantity)}
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
            ) : (
              <p className="text-center">Your cart is currently empty.</p>
            )}
          </div>
          {/* Cart Summary */}
          <div className="w-full lg:w-1/4 px-4">
            <CartSummary subtotal={totalPrice} shipping="Free" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
