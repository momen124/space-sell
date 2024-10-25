import { categoryService } from "@/service/categoryService";
import { Category } from "@/types/Category";
import { useQuery } from "@tanstack/react-query";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const HeroSection: React.FC = () => {
  const { data: categories, isLoading } = useQuery(
    categoryService.getQueryOptions("getCategories", { isRootParent: true })
  );

  return (
    <section className="flex gap-3 mb-12">
      {/* Category Menu */}
      <div className="w-64 border border-blue-100 p-6 bg-white rounded">
        <ul className="space-y-4">
          {
            isLoading && (
              <>
                {[...Array(9)].map((_, index) => <li key={index} className="animate-pulse bg-gray-200 rounded-lg min-h-6 w-full"></li>)}
              </>
            )
          }
          {categories?.data.filter((i: Category)=> i.isRootParent).map((category: Category) => (
            <li
              key={category.name}
              className="flex items-center justify-between"
            >
              <Link
                href={`/category/${category.id}`}
                className="text-blue-950 hover:text-blue-600"
              >
                {category.name}
              </Link>
              <ChevronRight className="h-4 w-4 text-blue-800" />
            </li>
          ))}
        </ul>
      </div>

      {/* Hero Section */}
      <div className="flex-1 bg-blue-600 text-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-4">
          Buy and Sell Anything in Your Community
        </h1>
        <p className="text-xl mb-6">
          Find great deals on electronics, furniture, cars, and more!
        </p>
        <div className="flex">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="flex-grow p-3 rounded-l-lg text-gray-800"
          />
          <button className="bg-yellow-500 text-gray-800 px-6 py-3 rounded-r-lg hover:bg-yellow-600">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
