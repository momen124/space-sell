import { Listing } from "@/types/Listing";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const FeaturedListingCard = ({
  listing,
  handleAddToCart,
}: {
  listing: Listing;
  handleAddToCart: (product: Listing) => void;
}) => {
  return (
    <Link
      href={`/listings/details/${listing.id}`}
      className="relative flex flex-col gap-4 bg-white rounded-lg shadow p-4 hover:shadow-lg transition"
    >
      <div className="relative w-full min-h-48">
        <Image
          src={listing.images[0].url}
          alt={listing.title}
          className="w-full rounded-t-lg mb-2"
          fill
          objectFit="cover"
        />
      </div>
      <h3 className="font-semibold">{listing.title}</h3>
      <p className="text-gray-600">{listing.price}</p>

      <Button onClick={() => handleAddToCart(listing)} variant={"secondary"}>
        Add to Cart
      </Button>
    </Link>
  );
};

const FeaturedListingCardSkeleton = () => {
  return (
    <div className="relative flex flex-col gap-4 bg-white rounded-lg shadow p-4 animate-pulse">
      <div className="relative w-full min-h-48 bg-gray-200 rounded-lg mb-2" />
      <div className="h-5 w-3/4 bg-gray-200 rounded" />
      <div className="h-4 w-1/4 bg-gray-200 rounded" />
      <div className="h-8 w-full bg-gray-200 rounded mt-4" />
    </div>
  );
};

export { FeaturedListingCard, FeaturedListingCardSkeleton };
