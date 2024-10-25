import AdvancedFilter from "@/components/common/Filter";
import ProductSection from "@/components/common/ProductSection";
import { Spinner } from "@/components/ui/spinner";
import { listingService } from "@/service/listingService";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function ListingsPage() {
  const [category, setCategory] = useState<string | null>(null);
  const [sortOption, setSortOption] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<string | null>(null);

  const { data: listings, isLoading } = useQuery(
    listingService.getQueryOptions("getListings", {
      category,
      sort: sortOption,
      price: priceRange,
    })
  );

  const filteredListings = listings?.data;

  return (
    <>
      <main className="container mx-auto py-8 flex space-x-8">
        {/* Sidebar Filter Section */}
        <aside className="w-1/4 min-w-[280px]">
          <h2 className="text-xl font-bold mb-4">Filter Results</h2>
          {/* Advanced Filter Section */}
          <AdvancedFilter
            onApplyFilters={(f) => {
              setCategory(f.category || null);
              setSortOption(f.sortOption || null);
              setPriceRange(
                !isNaN(parseInt(f.priceRange.min)) ||
                  !isNaN(parseInt(f.priceRange.max))
                  ? `${
                      !isNaN(parseInt(f.priceRange.min)) ? f.priceRange.min : ""
                    }:${
                      !isNaN(parseInt(f.priceRange.max)) ? f.priceRange.max : ""
                    }`
                  : null
              );
            }}
          />
        </aside>

        {/* Listings Section */}
        <section className="w-3/4">
          {isLoading ? (
            <div className="flex flex-1 items-center justify-center min-h-80">
              <Spinner />
            </div>
          ) : (
            <ProductSection
              title="All Listings"
              products={filteredListings}
              listingContainerClassName="grid-cols-1 md:grid-cols-1 lg:grid-cols-2"
            />
          )}
        </section>
      </main>
    </>
  );
}
