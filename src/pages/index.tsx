
import React from "react";
import HeroSection from "../components/hero/HeroSection";
import CategoriesSection from "../components/categories/CategoriesSection";
import HowItWorks from "../components/howItWorks/HowItWorks";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import FeaturedListings from "@/components/listings/Featured Listings";
import FlashSales from "@/components/FlashSales/FlashSales";
import BestSellingProducts from "@/components/BestSellingProducts";
import ServiceFeaturesSection from "@/components/ServiceFeaturesSection";
import NewArrivalSection from "@/components/NewArrivalSection";


const HomePage: React.FC = () => {
    return (
        <div className="bg-gray-100 font-sans">
            <Header />
            <main className="container mx-auto px-4 py-8">
                <HeroSection />
                <CategoriesSection />
                <FlashSales />
                <BestSellingProducts />
                <FeaturedListings />
                <NewArrivalSection />
                <ServiceFeaturesSection />
                <HowItWorks />
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
