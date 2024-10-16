// src/components/ServiceFeaturesSection.tsx

import React from "react";
import { Truck, Headphones, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <Truck className="h-12 w-12 text-black" />,
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
  },
  {
    icon: <Headphones className="h-12 w-12 text-black" />,
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
  },
  {
    icon: <ShieldCheck className="h-12 w-12 text-black" />,
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days",
  },
];

const ServiceFeaturesSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-8 mt-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            {feature.icon}
            <h4 className="text-lg font-semibold mt-4">{feature.title}</h4>
            <p className="text-sm text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceFeaturesSection;
