import { useCart } from '@/context/cart';
import React, { useState } from 'react';
import RootLayout from '../../components/layout/RootLayout';

const CheckoutPage: React.FC = () => {
  const { items, totalPrice } = useCart();
  const [formData, setFormData] = useState({
    firstName: '',
    companyName: '',
    streetAddress: '',
    apartment: '',
    city: '',
    phoneNumber: '',
    email: '',
    saveInfo: false,
  });
  const [paymentMethod, setPaymentMethod] = useState('bank');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    alert('Order placed successfully');
  };

  return (
    <RootLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Billing Details</h1>
        <div className="flex flex-wrap -mx-4">
          {/* Billing Details Form */}
          <div className="w-full lg:w-3/5 px-4 mb-6 lg:mb-0">
            <form className="border p-6 rounded-lg">
              {[
                { label: 'First Name', name: 'firstName', type: 'text', required: true },
                { label: 'Company Name', name: 'companyName', type: 'text' },
                { label: 'Street Address', name: 'streetAddress', type: 'text', required: true },
                { label: 'Apartment, floor, etc. (optional)', name: 'apartment', type: 'text' },
                { label: 'Town/City', name: 'city', type: 'text', required: true },
                { label: 'Phone Number', name: 'phoneNumber', type: 'tel', required: true },
                { label: 'Email Address', name: 'email', type: 'email', required: true },
              ].map(({ label, name, type, required }) => (
                <div key={name} className="mb-4">
                  <label className="block font-semibold text-gray-700 mb-2">
                    {label}
                    {required && '*'}
                  </label>
                  <input
                    type={type}
                    name={name}
                    value={formData[name]}
                    onChange={handleInputChange}
                    required={required}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
              ))}
              <div className="mb-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="saveInfo"
                    checked={formData.saveInfo}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  Save this information for faster check-out next time
                </label>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-2/5 px-4">
            <div className="border p-6 rounded-lg mb-6">
              <h2 className="text-2xl font-bold mb-4">Your Order</h2>
              <ul className="mb-4">
                {items.map((item) => (
                  <li key={item.id} className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-4">
                      <img src={item.imgSrc} alt={item.title} className="w-16 h-16 object-cover" />
                      <span>{item.title}</span>
                    </div>
                    <span>${item.price * item.quantity}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between border-t pt-4">
                <span>Subtotal:</span>
                <span>${totalPrice}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between border-t pt-4 font-semibold">
                <span>Total:</span>
                <span>${totalPrice}</span>
              </div>
            </div>

            {/* Payment Method */}
            <div className="border p-6 rounded-lg mb-6">
              <h2 className="text-xl font-bold mb-4">Payment Method</h2>
              <div className="mb-4">
                {[
                  { label: 'Bank', value: 'bank' },
                  { label: 'Cash on delivery', value: 'cash' },
                ].map(({ label, value }) => (
                  <label key={value} className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={value}
                      checked={paymentMethod === value}
                      onChange={handlePaymentChange}
                      className="mr-2"
                    />
                    {label}
                  </label>
                ))}
              </div>
              <div className="flex items-center space-x-4">
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

            {/* Place Order Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default CheckoutPage;
