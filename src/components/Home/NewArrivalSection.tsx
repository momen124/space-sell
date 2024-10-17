// src/components/NewArrivalSection.tsx

import React from "react";
import Link from "next/link";

const newArrivals = [
  {
    title: "PlayStation 5",
    description: "Black and White version of the PS5 coming out on sale.",
    imgSrc: "https://via.placeholder.com/500x300",
    link: "/products/playstation-5",
    size: "large", // this will help control the grid layout
  },
  {
    title: "Women's Collections",
    description: "Featured women collections that give you another vibe.",
    imgSrc: "https://via.placeholder.com/200x150",
    link: "/category/womens-collections",
    size: "small",
  },
  {
    title: "Speakers",
    description: "Amazon wireless speakers.",
    imgSrc: "https://via.placeholder.com/200x150",
    link: "/category/speakers",
    size: "small",
  },
  {
    title: "Perfume",
    description: "GUCCI INTENSE OUD EDP.",
    imgSrc: "https://via.placeholder.com/200x150",
    link: "/category/perfume",
    size: "small",
  },
];

const NewArrivalSection: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-red-500 text-lg font-semibold mb-2">Featured</h2>
      <h3 className="text-2xl font-bold mb-4">New Arrival</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {newArrivals.map((item, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg ${
              item.size === "large" ? "md:col-span-2" : "md:col-span-1"
            }`}
          >
            <img
              src={item.imgSrc}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-60 text-white w-full">
              <h4 className="text-lg font-bold">{item.title}</h4>
              <p className="text-sm mb-2">{item.description}</p>
              <Link href={item.link}>
                <button className="text-white underline hover:text-red-500">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivalSection;
