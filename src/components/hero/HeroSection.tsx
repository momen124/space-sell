import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

// Category menu data
const categories = [
  { name: "Woman's Fashion", link: "/category/womans-fashion" },
  { name: "Men's Fashion", link: "/category/mens-fashion" },
  { name: "Electronics", link: "/category/electronics" },
  { name: "Home & Lifestyle", link: "/category/home-lifestyle" },
  { name: "Medicine", link: "/category/medicine" },
  { name: "Sports & Outdoor", link: "/category/sports-outdoor" },
  { name: "Baby's & Toys", link: "/category/babys-toys" },
  { name: "Groceries & Pets", link: "/category/groceries-pets" },
  { name: "Health & Beauty", link: "/category/health-beauty" },
];

const HeroSection: React.FC = () => {
  return (
    <section className="flex gap-3 mb-12">
      {/* Category Menu */}
      <div className="w-64 border border-blue-100 p-6 bg-white rounded">
        <ul className="space-y-4">
          {categories.map((category) => (
            <li key={category.name} className="flex items-center justify-between">
              <Link href={category.link} className="text-blue-950 hover:text-blue-600">
                {category.name}
              </Link>
              <ChevronRight className="h-4 w-4 text-blue-800" />
            </li>
          ))}
        </ul>
      </div>

      {/* Hero Section */}
      <div className="flex-1 bg-blue-600 text-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-4">Buy and Sell Anything in Your Community</h1>
        <p className="text-xl mb-6">Find great deals on electronics, furniture, cars, and more!</p>
        <div className="flex">
          <input type="text" placeholder="What are you looking for?" className="flex-grow p-3 rounded-l-lg text-gray-800" />
          <button className="bg-yellow-500 text-gray-800 px-6 py-3 rounded-r-lg hover:bg-yellow-600">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
