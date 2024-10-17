import React from "react";

const OurStory: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center mb-12">
      <div className="md:w-1/2 mb-6 md:mb-0">
        <h2 className="text-3xl font-bold mb-4">Our Story</h2>
        <p className="text-gray-600">
          Launched in 2015, Exclusive is South Asia's premier online shopping marketplace with an active presence in Bangladesh.
          Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands 
          and serves 3 million customers across the region. Exclusive offers a diverse assortment in categories ranging from consumer.
        </p>
      </div>
      <div className="md:w-1/2">
        <img src="/images/about.jpg" alt="Our Story" className="rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default OurStory;
