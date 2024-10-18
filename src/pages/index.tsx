// pages/index.tsx

import NewArrivalSection from "@/components/Home/NewArrivalSection";
import ServiceFeaturesSection from "@/components/Home/ServiceFeaturesSection";
import React from "react";
import CategoriesSection from "../components/categories/CategoriesSection";
import ProductSection from "../components/common/ProductSection";
import HeroSection from "../components/hero/HeroSection";
import HowItWorks from "../components/howItWorks/HowItWorks";
import RootLayout from "../components/layout/RootLayout";

const HomePage: React.FC = () => {
    // Mock Data for Products
    const flashSales = [
        {
            id: "1",
            title: "HAVIT HV-952 Gamepad",
            price: "$120",
            oldPrice: "$150",
            imgSrc: "https://imgs.search.brave.com/C4HNHDeWH1bnyiBhW4E1iGfnQsIepFyhZfbDFB8PLTk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/MzFWc1JCZ2VuMEwu/anBn",
            link: "/product/1",
        },
        {
            id: "2",
            title: "AK-900 Wired Keyboard",
            price: "$80",
            oldPrice: "$100",
            imgSrc: "https://imgs.search.brave.com/PMEN7ttdp4h-kdiW7JNuN8AsCp3omKtVdPJphHLJEhg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzF0bEN4QzJGU0wu/anBn",
            link: "/product/2",
        },
        {
            id: "3",
            title: "IPS LCD Gaming Monitor",
            price: "$370",
            oldPrice: "$450",
            imgSrc: "https://imgs.search.brave.com/AJ6Ai5BdbNr12ckVts-oLtUazedB4RZ0aE56jcmYXsA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/Ym5vZm8ubml0cm9j/ZG4uY29tL1lDT3Fi/dWxPV1BUYmlnYVVP/ZmxxZnZCQ21rRnV4/ZldmL2Fzc2V0cy9p/bWFnZXMvb3B0aW1p/emVkL3Jldi03ZmVi/YjYyL3d3dy53ZXBj/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMy8xMC9JUFMt/dnMtTEVELW1vbml0/b3JzLTczOHguanBn",
            link: "/product/3",
        },
        {
            id: "4",
            title: "Logitech G502 Hero Gaming Mouse",
            price: "$50",
            oldPrice: "$70",
            imgSrc: "https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_SL1500_.jpg",
            link: "/product/4",
        },
    ];

    const bestSellingProducts = [
        {
            id: "5",
            title: "purfume",
            price: "$260",
            oldPrice: "$360",
            imgSrc: "https://imgs.search.brave.com/gJY3q2Ashc79rOu-Wt4u6b8mkraqKiYHpvVKIj29d10/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ3/NTAzMDczL3Bob3Rv/L3BlcmZ1bWUuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPTZv/VFAzZ3ZpM3R2Zjla/cWEtcWpyWi1Gc2lm/X0FvdlpJbjRfSVpz/cENMV2c9",
            link: "/product/5",
        },
        {
            id: "6",
            title: "Gucci Duffle Bag",
            price: "$960",
            oldPrice: "$1160",
            imgSrc: "https://imgs.search.brave.com/dMV3tF2Uq7bfe1xZEBrzXxNTU5Ues1vMOGS74eqOj8Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzIwNTg5OTkyL3Iv/aWwvMWY1MGE2LzQx/OTgwMzcxNzkvaWxf/NjAweDYwMC40MTk4/MDM3MTc5X2lzbzQu/anBn",
            link: "/product/6",
        },
        {
            id: "7",
            title: "RGB Liquid CPU Cooler",
            price: "$160",
            oldPrice: "$170",
            imgSrc: "https://imgs.search.brave.com/P2UEYFDt9mmM27EJ13AsvyLFia0oSf9KHyXwgeRNFss/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wb3dk/ZXIuZ2cvYmxvZy9j/b250ZW50L2ltYWdl/cy8yMDI0LzA1L0Nv/cnNhaXItaHlkcm8t/c2VyaWVzLmpwZw",
            link: "/product/7",
        },
        {
            id: "8",
            title: "lenovo",
            price: "$999",
            oldPrice: "$1200",
            imgSrc: "https://imgs.search.brave.com/KJ9OEj43DOZo7LUCiOf8459f7pWfhFSlxiEgXuw4tC8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9waXNj/ZXMuYmJ5c3RhdGlj/LmNvbS9pbWFnZTIv/QmVzdEJ1eV9VUy9p/bWFnZXMvcHJvZHVj/dHMvNjU0OS82NTQ5/NzE3X3NkLmpwZztt/YXhIZWlnaHQ9MTUw/O21heFdpZHRoPTMw/MDtmb3JtYXQ9d2Vi/cA",
            link: "/product/8",
        },
    ];

    const featuredListings = [
        {
            id: "9",
            title: "Samsung Galaxy S21",
            price: "$799",
            location: "Manhattan, NY",
            imgSrc: "https://imgs.search.brave.com/b8jS5nnrFKJ8L7gdbqBWK0V9CdHy09oj_Fe9l_Gp1EE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/OTEtaW1nLmNvbS9n/YWxsZXJ5X2ltYWdl/c191cGxvYWRzL2Mv/Zi9jZmI3NTBiOWI0/OTUxNjRlMzQ0NDNj/YThlNTgyM2I1MWE0/YjQ2YTRlLmpwZz90/cj1oLTU1MCx3LTAs/Yy1hdF9tYXg",
            link: "/listing/9",
        },
        {
            id: "10",
            title: "Leather Sofa",
            price: "$499",
            location: "Brooklyn, NY",
            imgSrc: "https://imgs.search.brave.com/HqhDkMqsKcLPyiYobupW2xS4cEn51UlXqHVAqz8Scj0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jYi5z/Y2VuZTcuY29tL2lz/L2ltYWdlL0NyYXRl/L0JhcnJldHRJSUx0/aDEwM0dyZFNmQWxl/U09TU1MyNC8kd2Vi/X3BscF9jYXJkJC8y/NDAyMDExNDQ2MDMv/YmFycmV0dC1paS1s/ZWF0aGVyLXNvZmEt/MTAzLmpwZw",
            link: "/listing/10",
        },
        {
            id: "11",
            title: "Sony WH-1000XM4 Wireless Headphones",
            price: "$348",
            location: "Boston, MA",
            imgSrc: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg",
            link: "/listing/11",
        },
        {
            id: "12",
            title: "Apple MacBook Air M1",
            price: "$999",
            location: "Queens, NY",
            imgSrc: "https://imgs.search.brave.com/lFjyk2yms0etnacLCFFBQfz77Gl56-duCdKEFe12q4c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/MzE2QXJ6TGVKMkwu/anBn",
            link: "/listing/12",
        },
    ];

    return (
        <RootLayout>
            <main className="container mx-auto px-4 py-8">
                <HeroSection />
                <CategoriesSection />
                <ProductSection
                    title="Flash Sales"
                    products={flashSales}
                    countdownTimer={{ hours: 3, minutes: 23, seconds: 56 }}
                />
                <ProductSection
                    title="Best Selling Products"
                    subtitle="This Month"
                    products={bestSellingProducts}
                    viewAllLink="/listing/ListingsPage"
                />
                <ProductSection
                    title="Featured Listings"
                    products={featuredListings}
                />
                <NewArrivalSection />
                <ServiceFeaturesSection />
                <HowItWorks />
            </main>
        </RootLayout>
    );
};

export default HomePage;
