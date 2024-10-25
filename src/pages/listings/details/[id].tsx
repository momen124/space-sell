import ListingDescription from "@/components/listings/ListingDescription";
import ListingDetails from "@/components/listings/ListingDetails";
import ListingGallery from "@/components/listings/ListingGallery";
import RelatedListings from "@/components/listings/RelatedListings";
import { Spinner } from "@/components/ui/spinner";
import { listingService } from "@/service/listingService";
import { useQuery } from "@tanstack/react-query";
import { GetServerSideProps } from "next";

const ListingDetailPage = ({ listingId }: { listingId: string }) => {
  const { data: listing, isLoading } = useQuery(
    listingService.getQueryOptions("getListingDetails", listingId)
  );

  const { data: relatedListings } = useQuery({
    ...listingService.getQueryOptions("getListings", {
      category: listing?.data?.category?.id,
    }),
    enabled: !!listing,
  });

  if (isLoading) {
    return (
      <div className="flex flex-1 items-center justify-center min-h-80">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-2/3">
            {listing?.data.images && <ListingGallery images={listing?.data.images} />}
            <ListingDescription
              description={listing?.data.description}
              features={null}
            />
          </div>
          <ListingDetails
            listing={listing?.data}
            title={listing?.data.title}
            price={listing?.data.price ? String(listing?.data.price) : null}
            // location={listing?.data.location}
            postDate={listing?.data.createdAt}
            // seller={listing?.data.seller}
          />
        </div>
        {relatedListings && (
          <RelatedListings listings={relatedListings?.data} />
        )}
      </div>
    </>
  );
};

export default ListingDetailPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      listingId: ctx.params?.id ?? null,
    },
  };
};
