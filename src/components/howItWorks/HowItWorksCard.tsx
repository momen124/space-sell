// src/components/HowItWorksCard.tsx

import React from "react";

interface HowItWorksCardProps {
    step: {
        title: string;
        description: string;
    };
}

const HowItWorksCard: React.FC<HowItWorksCardProps> = ({ step }) => {
    return (
        <div className="bg-white rounded-lg shadow p-4 text-center">
            <h3 className="font-semibold">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
        </div>
    );
};

export default HowItWorksCard;
