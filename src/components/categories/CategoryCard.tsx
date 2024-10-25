import { CategoryCardProps } from "@/types/Category";
import Link from "next/link";
import React from "react";



const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link href={category.link} passHref>
      <div className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer text-center">
        <i className={`${category.icon} text-2xl mb-2`} />
        <h3 className="text-lg font-semibold">{category.name}</h3>
      </div>
    </Link>
  );
};

export default CategoryCard;
