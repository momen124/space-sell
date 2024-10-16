// src/components/BestSellingProducts.tsx

import React from "react";
import { Heart, Eye } from "lucide-react";

interface Product {
  id: number;
  name: string;
  currentPrice: string;
  originalPrice: string;
  rating: number;
  reviews: number;
  imgSrc: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "The north coat",
    currentPrice: "$260",
    originalPrice: "$360",
    rating: 4.5,
    reviews: 65,
    imgSrc: "https://picsum.photos/200?random=1",
  },
  {
    id: 2,
    name: "Gucci duffle bag",
    currentPrice: "$960",
    originalPrice: "$1160",
    rating: 5,
    reviews: 85,
    imgSrc: "https://picsum.photos/200?random=2",
  },
  {
    id: 3,
    name: "RGB liquid CPU Cooler",
    currentPrice: "$160",
    originalPrice: "$170",
    rating: 4,
    reviews: 95,
    imgSrc: "https://picsum.photos/200?random=3",
  },
  {
    id: 4,
    name: "Small BookSelf",
    currentPrice: "$360",
    originalPrice: "",
    rating: 4,
    reviews: 65,
    imgSrc: "https://picsum.photos/200?random=4",
  },
];

const BestSellingProducts: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-red-500 text-lg font-semibold mb-2">This Month</h2>
      <h3 className="text-2xl font-bold mb-4">Best Selling Products</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 relative">
            <img src={product.imgSrc} alt={product.name} className="w-full h-40 object-cover rounded-lg mb-4" />
            <div className="absolute top-2 right-2 flex space-x-2">
              <button className="p-1 rounded-full bg-white shadow">
                <Heart className="h-4 w-4 text-gray-800" />
              </button>
              <button className="p-1 rounded-full bg-white shadow">
                <Eye className="h-4 w-4 text-gray-800" />
              </button>
            </div>
            <h4 className="font-bold">{product.name}</h4>
            <div className="flex items-center space-x-2">
              <span className="text-red-500 font-bold">{product.currentPrice}</span>
              {product.originalPrice && (
                <span className="line-through text-gray-500">{product.originalPrice}</span>
              )}
            </div>
            <div className="mt-2">
              <span className="text-yellow-500">
                {'★'.repeat(Math.round(product.rating))}
                {'☆'.repeat(5 - Math.round(product.rating))}
              </span>
              <span className="ml-2 text-gray-500">({product.reviews})</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">View All</button>
      </div>
    </section>
  );
};

export default BestSellingProducts;
