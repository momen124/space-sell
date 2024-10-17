import React from "react";
import Link from "next/link";
import { Heart, Eye } from "lucide-react";
import FeaturedListingCard from "./listings/FeaturedListingCard ";

interface Product {
    id: number;
    name: string;
    currentPrice: string;
    originalPrice: string;
    rating: number;
    reviews: number;
    imgSrc: string;
    link: string;
}

const products: Product[] = [
    {
        id: 1,
        name: "The north coat",
        currentPrice: "$260",
        originalPrice: "$360",
        rating: 4.5,
        reviews: 65,
        imgSrc: "https://picsum.photos/200?random=1",
        link: "/product/1",
    },
    {
        id: 2,
        name: "Gucci duffle bag",
        currentPrice: "$960",
        originalPrice: "$1160",
        rating: 5,
        reviews: 85,
        imgSrc: "https://picsum.photos/200?random=2",
        link: "/product/2",
    },
    {
        id: 3,
        name: "RGB liquid CPU Cooler",
        currentPrice: "$160",
        originalPrice: "$170",
        rating: 4,
        reviews: 95,
        imgSrc: "https://picsum.photos/200?random=3",
        link: "/product/3",
    },
    {
        id: 4,
        name: "Small BookSelf",
        currentPrice: "$360",
        originalPrice: "",
        rating: 4,
        reviews: 65,
        imgSrc: "https://picsum.photos/200?random=4",
        link: "/product/4",
    },
];

const BestSellingProducts: React.FC = () => {
    return (
        <section className="mb-12">
            <h2 className="text-red-500 text-lg font-semibold mb-2">This Month</h2>
            <h3 className="text-2xl font-bold mb-4">Best Selling Products</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <FeaturedListingCard
                        key={product.id}
                        listing={{
                            id: product.id.toString(),
                            title: product.name,
                            price: product.currentPrice,
                            location: "",
                            imgSrc: product.imgSrc,
                            link: product.link,
                        }}
                    />
                ))}
            </div>
            <div className="mt-6 text-center">
                <Link href="/listing/ListingsPage" passHref>
                    <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">View All</button>
                </Link>
            </div>
        </section>
    );
};

export default BestSellingProducts;
