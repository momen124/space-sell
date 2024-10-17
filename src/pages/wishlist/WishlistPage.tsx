// src/pages/WishlistPage.tsx

import React from "react";
import ProductSection from "@/components/Home/ProductSection";
import RootLayout from "../layout";

const WishlistPage: React.FC = () => {
  const wishlistProducts = [
    {
      id: "1",
      title: "Gucci duffle bag",
      price: "$960",
      oldPrice: "$1160",
      imgSrc: "/images/gucci-duffle-bag.jpg",
      link: "/product/1",
    },
    {
      id: "2",
      title: "RGB liquid CPU Cooler",
      price: "$1960",
      imgSrc: "/images/rgb-cpu-cooler.jpg",
      link: "/product/2",
    },
    {
      id: "3",
      title: "GP11 Shooter USB Gamepad",
      price: "$550",
      imgSrc: "/images/gamepad.jpg",
      link: "/product/3",
    },
    {
      id: "4",
      title: "Quilted Satin Jacket",
      price: "$750",
      imgSrc: "/images/quilted-jacket.jpg",
      link: "/product/4",
    },
  ];

  const justForYouProducts = [
    {
      id: "5",
      title: "ASUS FHD Gaming Laptop",
      price: "$960",
      oldPrice: "$1160",
      imgSrc: "/images/gaming-laptop.jpg",
      link: "/product/5",
    },
    {
      id: "6",
      title: "IPS LCD Gaming Monitor",
      price: "$1160",
      imgSrc: "/images/gaming-monitor.jpg",
      link: "/product/6",
    },
    {
      id: "7",
      title: "HAVIT HV-G92 Gamepad",
      price: "$560",
      imgSrc: "/images/havit-gamepad.jpg",
      link: "/product/7",
    },
    {
      id: "8",
      title: "AK-900 Wired Keyboard",
      price: "$200",
      imgSrc: "/images/wired-keyboard.jpg",
      link: "/product/8",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <RootLayout>
      {/* Wishlist Section */}
      <ProductSection title="Wishlist (4)" products={wishlistProducts} />
      
      {/* Just For You Section */}
      <ProductSection
        title="Just For You"
        products={justForYouProducts}
        viewAllLink="/listing/ListingsPage"
      />
      </RootLayout>
    </div>
  );
};

export default WishlistPage;