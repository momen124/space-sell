import React from 'react';

interface CartItemProps {
  product: {
    name: string;
    price: number;
    quantity: number;
    imgSrc: string;
  };
  onQuantityChange: (quantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ product, onQuantityChange }) => {
  return (
    <div className="flex items-center justify-between border-b py-4">
      {/* Product Image and Name */}
      <div className="flex items-center space-x-4">
        <img src={product.imgSrc} alt={product.name} className="w-16 h-16 object-cover" />
        <span>{product.name}</span>
      </div>
      {/* Price */}
      <span className="w-20 text-center">${product.price}</span>
      {/* Quantity Selector */}
      <select
        value={product.quantity}
        onChange={(e) => onQuantityChange(Number(e.target.value))}
        className="border rounded px-2 py-1"
      >
        {[...Array(10).keys()].map((i) => (
          <option key={i} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      {/* Subtotal */}
      <span className="w-20 text-center">${product.price * product.quantity}</span>
    </div>
  );
};

export default CartItem;
