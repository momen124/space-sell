import { categoryService } from "@/service/categoryService";
import { Category } from "@/types/Category";
import { cn } from "@/utils/cn";
import { useQuery } from "@tanstack/react-query";
import { Camera, Gamepad2, Headphones, Smartphone, Watch } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaDesktop, FaQuestion } from "react-icons/fa";

const getCategoryIcon = (name: string) =>{ 
  const categoryIcons = {
  mobiles: <Smartphone className="h-6 w-6" /> ,
  computers: <FaDesktop className="h-6 w-6" /> ,
  smartwatch: <Watch className="h-6 w-6" /> ,
  cameras: <Camera className="h-6 w-6" /> ,
  headphones: <Headphones className="h-6 w-6" /> ,
  gaming: <Gamepad2 className="h-6 w-6" /> ,
}

return categoryIcons[name.split(' ').join('').toLowerCase() as keyof typeof categoryIcons] ?? <FaQuestion />
}

const CategoriesSection: React.FC = () => {
  const {data, isLoading} = useQuery(categoryService.getQueryOptions("getCategories"));

  const featuredCategories = data?.data.filter((category: Category) => category.isFeatured);

  return (
    <section className="mb-12">
      {/* Header Section */}
      <h2 className="text-red-500 text-lg font-semibold mb-2">Categories</h2>
      <h3 className="text-2xl font-bold mb-4">Browse By Category</h3>

      {/* Category Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {isLoading && (
          <>
          {[...Array(6)].map((_, index) => <div key={index} className="animate-pulse bg-gray-200 rounded-lg min-h-24 w-full"></div>)}</>
        )}
        {featuredCategories?.map((category: Category, index: number) => (
          <Link href={`/category/${category.id}`} key={index} passHref>
            <div
              className={cn(`cursor-pointer flex flex-col items-center justify-center border min-h-24 rounded-lg p-4 transition-colors duration-300 text-black hover:bg-gray-200`,)}
            >
              {getCategoryIcon(category.name)}
              <span className="mt-2 font-semibold">{category.name}</span>
            </div>
          </Link>
        ))}
      </div>

     
    </section>
  );
};

export default CategoriesSection;
