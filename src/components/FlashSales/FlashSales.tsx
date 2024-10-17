import React from "react";
import FeaturedListingCard from "../listings/FeaturedListingCard ";

interface Product {
    id: string;
    title: string;
    price: string;
    oldPrice: string;
    imgSrc: string;
    link: string;
}

const flashSales: Product[] = [
    {
        id: "1",
        title: "HAVIT HV-952 Gamepad",
        price: "$120",
        oldPrice: "$150",
        imgSrc: "/images/gamepad.png",
        link: "/product/1",
    },
    {
        id: "2",
        title: "AK-900 Wired Keyboard",
        price: "$80",
        oldPrice: "$100",
        imgSrc: "/images/keyboard.png",
        link: "/product/2",
    },
    {
        id: "3",
        title: "IPS LCD Gaming Monitor",
        price: "$370",
        oldPrice: "$450",
        imgSrc: "/images/monitor.png",
        link: "/product/3",
    },
];

const FlashSales: React.FC = () => {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Flash Sales</h2>
            <div className="flex justify-between items-center mb-6">
                <div className="text-lg text-red-600 font-semibold">Today's Deals</div>
                <div className="text-lg font-semibold flex space-x-2">
                    <span>03</span>:<span>23</span>:<span>19</span>:<span>56</span>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {flashSales.map((product) => (
                    <FeaturedListingCard
                        key={product.id}
                        listing={{
                            id: product.id,
                            title: product.title,
                            price: product.price,
                            location: "",
                            imgSrc: product.imgSrc,
                            link: product.link,
                        }}
                    />
                ))}
            </div>
        </section>
    );
};

export default FlashSales;
