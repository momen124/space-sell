// src/components/HeroSection.tsx

import React from "react";

const HeroSection: React.FC = () => {
    return (
        <section className="bg-blue-600 text-white rounded-lg shadow-lg p-8 mb-12">
            <h1 className="text-4xl font-bold mb-4">Buy and Sell Anything in Your Community</h1>
            <p className="text-xl mb-6">Find great deals on electronics, furniture, cars, and more!</p>
            <div className="flex">
                <input type="text" placeholder="What are you looking for?" className="flex-grow p-3 rounded-l-lg text-gray-800" />
                <button className="bg-yellow-500 text-gray-800 px-6 py-3 rounded-r-lg hover:bg-yellow-600">
                 Search

                </button>
            </div>
        </section>
    );
};

export default HeroSection;
