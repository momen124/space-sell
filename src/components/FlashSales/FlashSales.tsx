import React from "react";

interface Product {
    id: string;
    title: string;
    price: string;
    oldPrice: string;
    imgSrc: string;
}

const flashSales: Product[] = [
    {
        id: "1",
        title: "HAVIT HV-952 Gamepad",
        price: "$120",
        oldPrice: "$150",
        imgSrc: "/images/gamepad.png",
    },
    {
        id: "2",
        title: "AK-900 Wired Keyboard",
        price: "$80",
        oldPrice: "$100",
        imgSrc: "/images/keyboard.png",
    },
    {
        id: "3",
        title: "IPS LCD Gaming Monitor",
        price: "$370",
        oldPrice: "$450",
        imgSrc: "/images/monitor.png",
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
                    <div key={product.id} className="bg-white p-4 rounded shadow">
                        <img src={product.imgSrc} alt={product.title} className="w-full h-40 object-cover mb-4 rounded" />
                        <h3 className="font-semibold text-lg">{product.title}</h3>
                        <div className="flex justify-between items-center mt-2">
                            <span className="text-green-600 font-semibold">{product.price}</span>
                            <span className="line-through text-gray-400">{product.oldPrice}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FlashSales;
