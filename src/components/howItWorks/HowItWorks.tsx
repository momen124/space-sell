// src/components/HowItWorks.tsx

import React from "react";
import HowItWorksCard from "./HowItWorksCard";

interface Step {
    title: string;
    description: string;
}

const steps: Step[] = [
    { title: "Create an Account", description: "Sign up for free and create your profile." },
    { title: "Post Your Ad", description: "List your item for sale with photos and details." },
    { title: "Connect with Buyers", description: "Get messages from interested buyers and negotiate." },
];

const HowItWorks: React.FC = () => {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {steps.map((step, index) => (
                    <HowItWorksCard key={index} step={step} />
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;
