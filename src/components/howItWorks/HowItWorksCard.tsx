import { HowItWorksCardProps } from "@/types/howItwork";
import React from "react";



const HowItWorksCard: React.FC<HowItWorksCardProps> = ({ step }) => {
    return (
        <div className="bg-white rounded-lg shadow p-4 text-center">
            <h3 className="font-semibold">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
        </div>
    );
};

export default HowItWorksCard;
