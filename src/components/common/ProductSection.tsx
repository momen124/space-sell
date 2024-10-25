import { useCart } from "@/context/cart"; // Make sure the path to your cart context is correct
import { Listing } from "@/types/Listing";
import { ProductSectionProps } from "@/types/ProductSection";
import Link from "next/link";
import React from "react";
import {
  FeaturedListingCard,
  FeaturedListingCardSkeleton,
} from "../listings/FeaturedListingCard ";
import { cn } from "@/utils/cn";

const ProductSection = ({
  title,
  subtitle,
  products,
  viewAllLink,
  countdownTimer,
  isLoading,
  listingContainerClassName
}: ProductSectionProps & {listingContainerClassName?: string}) => {
  const { addToCart } = useCart();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const targetDate = new Date(countdownTimer ?? 0).getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { hours: 0, minutes: 0, seconds: 0 };
    }

    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = React.useState<{
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  React.useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const timerInterval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timerInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countdownTimer]);

  const handleAddToCart = (product: Listing) => {
    console.log("Add to Cart Clicked");
    console.log("Product Info: ", product);

    addToCart(product);
  };

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      {subtitle && (
        <h3 className="text-lg text-red-600 font-semibold mb-2">{subtitle}</h3>
      )}
      {countdownTimer && (
        <div className="flex justify-between items-center mb-6">
          <div className="text-lg text-red-600 font-semibold">{`Today's Deals`}</div>
          <div className="text-lg font-semibold flex space-x-2">
            <span>{String(timeLeft?.hours).padStart(2, "0")}</span>:
            <span>{String(timeLeft?.minutes).padStart(2, "0")}</span>:
            <span>{String(timeLeft?.seconds).padStart(2, "0")}</span>
          </div>
        </div>
      )}
      <div className={cn("grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6", listingContainerClassName)}>
        {isLoading ? (
          <>
            {Array.from({ length: 4 }).map((_, index) => (
              <FeaturedListingCardSkeleton key={index} />
            ))}
          </>
        ) : (
          <>
            {products?.map((product) => (
              <div key={product.id}>
                <FeaturedListingCard
                  listing={product}
                  handleAddToCart={handleAddToCart}
                />
              </div>
            ))}
          </>
        )}
      </div>
      {viewAllLink && (
        <div className="mt-6 text-center">
          <Link href={viewAllLink} passHref>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
              View All
            </button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default ProductSection;
