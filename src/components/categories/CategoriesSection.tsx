// src/components/CategoriesSection.tsx

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight, Camera, Smartphone, Watch, Headphones, Gamepad2 } from "lucide-react";
import { FaDesktop } from "react-icons/fa";

const categories = [
  { name: "Phones", icon: <Smartphone className="h-6 w-6" />, link: "/category/phones" },
  { name: "Computers", icon: <FaDesktop className="h-6 w-6" />, link: "/category/computers" },
  { name: "SmartWatch", icon: <Watch className="h-6 w-6" />, link: "/category/smartwatch" },
  { name: "Camera", icon: <Camera className="h-6 w-6" />, link: "/category/camera" },
  { name: "HeadPhones", icon: <Headphones className="h-6 w-6" />, link: "/category/headphones" },
  { name: "Gaming", icon: <Gamepad2 className="h-6 w-6" />, link: "/category/gaming" },
];

const CategoriesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleCategoryClick = (categoryName: string) => {
    setActiveCategory(categoryName);
  };

  return (
    <section className="mb-12">
      {/* Header Section */}
      <h2 className="text-red-500 text-lg font-semibold mb-2">Categories</h2>
      <h3 className="text-2xl font-bold mb-4">Browse By Category</h3>

      {/* Category Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <Link href={category.link} key={index} passHref>
            <div
              onClick={() => handleCategoryClick(category.name)}
              className={`cursor-pointer flex flex-col items-center border rounded-lg p-4 transition-colors duration-300 ${
                activeCategory === category.name
                  ? 'bg-red-500 text-white hover:bg-red-600'
                  : 'text-black hover:bg-gray-200'
              }`}
            >
              {category.icon}
              <span className="mt-2 font-semibold">{category.name}</span>
            </div>
          </Link>
        ))}
      </div>

     
    </section>
  );
};

export default CategoriesSection;
