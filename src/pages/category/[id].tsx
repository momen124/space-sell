import ProductSection from "@/components/common/ProductSection";
import { Spinner } from "@/components/ui/spinner";
import { categoryService } from "@/service/categoryService";
import { listingService } from "@/service/listingService";
import { useQuery } from "@tanstack/react-query";
import { GetServerSideProps } from "next";

const CategoryPage = ({ categoryId }: { categoryId: string }) => {
  const { data: category, isLoading } = useQuery(
    categoryService.getQueryOptions("getCategoryDetails", categoryId)
  );
  const { data: listings, isLoading: isLoadingListings } = useQuery(
    listingService.getQueryOptions("getListings", { category: categoryId })
  );

  if (isLoading) {
    return (
      <div className="flex flex-1 items-center justify-center min-h-80">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <div className="flex-1">
        <h1 className="text-4xl font-bold mb-4">{category?.data?.name}</h1>
        <p className="text-lg mb-6">
          Showing products for the &quot;{category?.data?.name}&quot; category.
        </p>

        {/* Display filtered products */}
        {(listings?.data?.length ?? 0) > 0 ? (
          <section className="w-full">
            {isLoadingListings ? (
              <div className="flex flex-1 items-center justify-center min-h-80">
                <Spinner />
              </div>
            ) : (
              <ProductSection
                title="All Listings"
                products={listings?.data}
                listingContainerClassName="grid-cols-1 md:grid-cols-1 lg:grid-cols-2"
              />
            )}
          </section>
        ) : (
          <p>No products found for this category.</p>
        )}
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      categoryId: context.query.id ?? null,
    },
  };
};

export default CategoryPage;
