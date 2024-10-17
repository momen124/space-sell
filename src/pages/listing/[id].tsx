import { GetServerSideProps } from 'next';
import { Button } from "@/components/ui/button";
import { ListingService } from '@/service/listingService';
import { notFound } from 'next/navigation';
import { Listing } from '@/types/listing';




export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const listings = await ListingService.getListings();
    const listing = listings.find((l: Listing) => l.id === params?.id);

    if (!listing) {
      return { notFound: true }; // Redirect to 404 if no listing found
    }

    return {
      props: {
        listing,
      },
    };
  } catch (error) {
    console.error("Error fetching listing:", error);
    return { notFound: true }; // If there's an error, also redirect to 404
  }
};

export default function ListingPage({ listing }: { listing: Listing }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img src={listing.image} alt={listing.title} className="w-full rounded-lg shadow-lg" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{listing.title}</h1>
          <p className="text-2xl font-bold text-green-600 mb-4">${listing.price.toLocaleString()}</p>
          <p className="text-gray-700 mb-4">{listing.description}</p>
          <p className="text-sm text-gray-500 mb-4">Seller: {listing.seller}</p>
          <Button className="w-full">Contact Seller</Button>
        </div>
      </div>
    </div>
  );
}
