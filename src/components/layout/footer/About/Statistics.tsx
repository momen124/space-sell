import React from "react";
import { FaStore, FaUsers, FaProductHunt, FaChartLine } from "react-icons/fa";

const stats = [
  { icon: <FaStore />, value: "10.5k", label: "Sellers active on our site" },
  { icon: <FaProductHunt />, value: "33k", label: "Monthly Product Sale" },
  { icon: <FaUsers />, value: "45.5k", label: "Customer active on our site" },
  { icon: <FaChartLine />, value: "25k", label: "Annual gross sale on our site" },
];

const Statistics: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`p-6 text-center rounded-lg shadow-lg ${index === 1 ? "bg-red-100" : "bg-white"}`}
        >
          <div className="text-4xl text-red-500 mb-2">{stat.icon}</div>
          <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
          <p className="text-gray-600">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
