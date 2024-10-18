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
            imgSrc: "/images/gamepad.png",
            link: "/product/1",
        },
        {
            id: "2",
            title: "AK-900 Wired Keyboard",
            price: "$80",
            oldPrice: "$100",
            imgSrc: "/images/keyboard.png",
            link: "/product/2",
        },
        {
            id: "3",
            title: "IPS LCD Gaming Monitor",
            price: "$370",
            oldPrice: "$450",
            imgSrc: "/images/monitor.png",
            link: "/product/3",
        },
    ];

    const bestSellingProducts = [
        {
            id: "4",
            title: "The north coat",
            price: "$260",
            oldPrice: "$360",
            imgSrc: "https://picsum.photos/200?random=1",
            link: "/product/4",
        },
        {
            id: "5",
            title: "Gucci duffle bag",
            price: "$960",
            oldPrice: "$1160",
            imgSrc: "https://picsum.photos/200?random=2",
            link: "/product/5",
        },
        {
            id: "6",
            title: "RGB liquid CPU Cooler",
            price: "$160",
            oldPrice: "$170",
            imgSrc: "https://picsum.photos/200?random=3",
            link: "/product/6",
        },
    ];

    const featuredListings = [
        {
            id: "7",
            title: "Samsung Galaxy S21",
            price: "$799",
            location: "Manhattan, NY",
            imgSrc: "https://picsum.photos/300/200?random=1",
            link: "/listing/7",
        },
        {
            id: "8",
            title: "Leather Sofa",
            price: "$499",
            location: "Brooklyn, NY",
            imgSrc: "https://picsum.photos/300/200?random=2",
            link: "/listing/8",
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
