import { useCart } from "@/context/cart";
import { Listing } from "@/types/Listing";
import React from "react";
import { FeaturedListingCard } from "./FeaturedListingCard ";

const RelatedListings: React.FC<{ listings?: Listing[] }> = ({ listings }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (product: Listing) => {
    console.log("Add to Cart Clicked");
    console.log("Product Info: ", product);

    addToCart(product);
  };

  return (
    <section className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">Related Listings</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {listings?.map((listing) => (
          <FeaturedListingCard
            key={listing.id}
            listing={listing}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </section>
  );
};

export default RelatedListings;
