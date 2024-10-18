// src/components/NewArrivalSection.tsx

import React from "react";
import Link from "next/link";

const newArrivals = [
  {
    title: "PlayStation 5",
    description: "Black and White version of the PS5 coming out on sale.",
    imgSrc: "https://imgs.search.brave.com/X7-FR_V7dGsoQLLKZtiSUUJaf8jH5o7wNzdTv89vcIE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L0E5/MmZBRnA4R1VEUkNj/ZFNCSmJVS2QtMzIw/LTgwLmpwZw",
    link: "/products/playstation-5",
    size: "large", // this will help control the grid layout
  },
  {
    title: "Women's Collections",
    description: "Featured women collections that give you another vibe.",
    imgSrc: "https://imgs.search.brave.com/MBoTkDuKTucimCCyfaAQIdYwqfW4nnI3pbkf7iN8kwo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ib29r/c2FuZGJhby5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjIv/MDEvc2hvcnQtc3Rv/cnktY29sbGVjdGlv/bnMtYnktd29tZW4t/MTAwMHg1NjMucG5n",
    link: "/category/womens-collections",
    size: "small",
  },
  {
    title: "Speakers",
    description: "Amazon wireless speakers.",
    imgSrc: "https://imgs.search.brave.com/YRI-ApY5gra1tNb86DqfNE6Nu-UYLDfnWqd_Jm70nec/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzI2LzU1LzIx/LzM2MF9GXzI2NTUy/MTg0XzY2RlNGZzNp/ajlGb0pCUDBmdlI5/ZnFFRFJmR3ZuVlVq/LmpwZw",
    link: "/category/speakers",
    size: "small",
  },
  {
    title: "Perfume",
    description: "GUCCI INTENSE OUD EDP.",
    imgSrc: "https://imgs.search.brave.com/ZdxorR5CviftXh7qRLV0plUTjg5aVU4dFXLPCW16Y_c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9sdXh1cnktcGVy/ZnVtZS1ib3R0bGUt/YmVhdXR5LWNvc21l/dGljcy1sdXh1cnkt/cGVyZnVtZV8xMDI5/NDczLTcyMjY5OS5q/cGc_c2l6ZT02MjYm/ZXh0PWpwZw",
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
