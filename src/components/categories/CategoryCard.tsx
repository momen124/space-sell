import React from "react";

interface CategoryCardProps {
  category: {
    name: string;
    icon: string;
    link: string;
  };
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md hover:bg-gray-100 cursor-pointer">
      <i className={`${category.icon} text-3xl mb-2`}></i>
      <h3 className="text-lg font-semibold">{category.name}</h3>
    </div>
  );
};

export default CategoryCard;
