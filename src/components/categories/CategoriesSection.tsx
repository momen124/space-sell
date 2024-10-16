// src/components/CategoriesSection.tsx

import React from "react";
import { Camera, Smartphone,  Watch, Headphones, Gamepad2 } from "lucide-react";
import { FaDesktop } from "react-icons/fa";

const categories = [
  { name: "Phones", icon: <Smartphone className="h-6 w-6" /> },
  { name: "Computers", icon: <FaDesktop className="h-6 w-6" /> },
  { name: "SmartWatch", icon: <Watch className="h-6 w-6" /> },
  { name: "Camera", icon: <Camera className="h-6 w-6 text-white" />, active: true },
  { name: "HeadPhones", icon: <Headphones className="h-6 w-6" /> },
  { name: "Gaming", icon: <Gamepad2 className="h-6 w-6" /> },
];

const CategoriesSection: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-red-500 text-lg font-semibold mb-2">Categories</h2>
      <h3 className="text-2xl font-bold mb-4">Browse By Category</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`flex flex-col items-center border rounded-lg p-4 ${
              category.active ? 'bg-red-500 text-white' : 'text-black'
            }`}
          >
            {category.icon}
            <span className="mt-2 font-semibold">{category.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
