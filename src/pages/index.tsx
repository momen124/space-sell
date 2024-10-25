// pages/index.tsx

import NewArrivalSection from "@/components/Home/NewArrivalSection";
import ServiceFeaturesSection from "@/components/Home/ServiceFeaturesSection";
import { listingService } from "@/service/listingService";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import CategoriesSection from "../components/categories/CategoriesSection";
import ProductSection from "../components/common/ProductSection";
import HeroSection from "../components/hero/HeroSection";
import HowItWorks from "../components/howItWorks/HowItWorks";

const HomePage: React.FC = () => {
  const { data: flashSaleProducts, isLoading: isLoadingFlashSale } = useQuery(
    listingService.getQueryOptions("getListings", { isOnSale: true })
  );

  const { data: featuredProducts, isLoading: isLoadingFeaturedProducts } =
    useQuery(
      listingService.getQueryOptions("getListings", { isFeatured: true })
    );

  const { data: bestSellingProducts, isLoading: isLoadingBestSelling } =
    useQuery(
      listingService.getQueryOptions("getListings", { isFeatured: true })
    );

  return (
    <>
      <main className="container mx-auto px-4 py-8">
        <HeroSection />
        <CategoriesSection />
        <ProductSection
          title="Flash Sales"
          products={flashSaleProducts?.data}
          isLoading={isLoadingFlashSale}
          countdownTimer={new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDate() + 1
          ).toISOString()}
        />
        <ProductSection
          title="Featured Listings"
          isLoading={isLoadingFeaturedProducts}
          products={featuredProducts?.data}
        />
        <ProductSection
          title="Best Selling Products"
          subtitle="This Month"
          isLoading={isLoadingBestSelling}
          products={bestSellingProducts?.data}
          viewAllLink="/listings"
        />
        <NewArrivalSection />
        <ServiceFeaturesSection />
        <HowItWorks />
      </main>
    </>
  );
};

export default HomePage;
