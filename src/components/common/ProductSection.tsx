import { useCart } from "@/context/cart"; // Make sure the path to your cart context is correct
import { Product, ProductSectionProps } from "@/types/ProductSection";
import Link from "next/link";
import React from "react";
import FeaturedListingCard from "../listings/FeaturedListingCard ";

const ProductSection: React.FC<ProductSectionProps> = ({
  title,
  subtitle,
  products,
  viewAllLink,
  countdownTimer,
}) => {
  // Countdown Timer Logic
  const [hours, setHours] = React.useState(countdownTimer?.hours || 0);
  const [minutes, setMinutes] = React.useState(countdownTimer?.minutes || 0);
  const [seconds, setSeconds] = React.useState(countdownTimer?.seconds || 0);
  const { addToCart } = useCart(); // Ensure the function name matches the one in the context

  React.useEffect(() => {
    if (countdownTimer) {
      const timerInterval = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds > 0) return prevSeconds - 1;

          if (minutes > 0 || hours > 0) {
            if (minutes > 0) {
              setMinutes((prevMinutes) => prevMinutes - 1);
            } else if (hours > 0) {
              setHours((prevHours) => prevHours - 1);
              setMinutes(59);
            }
            return 59;
          }

          clearInterval(timerInterval);
          return 0;
        });
      }, 1000);

      return () => clearInterval(timerInterval);
    }
  }, [hours, minutes, countdownTimer]);

  // Adding product to cart
  const handleAddToCart = (product: Product) => {
    console.log("Add to Cart Clicked");
    console.log("Product Info: ", product);
    
    addToCart({
      id: parseInt(product.id),
      title: product.title,
      price: parseFloat(product.price.replace('$', '')),
      imgSrc: product.imgSrc,
    });
  };

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      {subtitle && <h3 className="text-lg text-red-600 font-semibold mb-2">{subtitle}</h3>}
      {countdownTimer && (
        <div className="flex justify-between items-center mb-6">
          <div className="text-lg text-red-600 font-semibold">Today's Deals</div>
          <div className="text-lg font-semibold flex space-x-2">
            <span>{String(hours).padStart(2, "0")}</span>:
            <span>{String(minutes).padStart(2, "0")}</span>:
            <span>{String(seconds).padStart(2, "0")}</span>
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id}>
            <FeaturedListingCard
              listing={{
                id: product.id,
                title: product.title,
                price: product.price,
                location: "",
                imgSrc: product.imgSrc,
              }}
            />
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
            >
              Add to Cart
            </button>
          </div>
        ))}
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
