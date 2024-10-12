// src/components/HowItWorks.tsx

import React from 'react';
import { Rocket, Moon, User } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section className="bg-white rounded-lg p-8 mb-12">
      <h2 className="text-2xl font-semibold mb-6 text-center">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <Rocket className="mx-auto h-12 w-12 text-blue-600 mb-4" />
          <h3 className="font-semibold mb-2">Browse</h3>
          <p className="text-gray-600">Explore our wide range of space items</p>
        </div>
        <div className="text-center">
          <Moon className="mx-auto h-12 w-12 text-blue-600 mb-4" />
          <h3 className="font-semibold mb-2">Choose</h3>
          <p className="text-gray-600">Select the perfect space gear for your needs</p>
        </div>
        <div className="text-center">
          <User className="mx-auto h-12 w-12 text-blue-600 mb-4" />
          <h3 className="font-semibold mb-2">Buy</h3>
          <p className="text-gray-600">Secure your items with our easy checkout process</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
