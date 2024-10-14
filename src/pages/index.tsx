
import React from "react";
import HeroSection from "../components/hero/HeroSection";
import CategoriesSection from "../components/categories/CategoriesSection";
import HowItWorks from "../components/howItWorks/HowItWorks";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import FeaturedListings from "@/components/listings/Featured Listings";


const HomePage: React.FC = () => {
    return (
        <div className="bg-gray-100 font-sans">
            <Header />
            <main className="container mx-auto px-4 py-8">
                <HeroSection />
                <CategoriesSection />
                <FeaturedListings />
                <HowItWorks />
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
