import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

interface TeamMember {
  name: string;
  title: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  { name: "Tom Cruise", title: "Founder & Chairman", imageUrl: "/images/tom-cruise.jpg" },
  { name: "Emma Watson", title: "Managing Director", imageUrl: "/images/emma-watson.jpg" },
  { name: "Will Smith", title: "Product Designer", imageUrl: "/images/will-smith.jpg" },
];

const TeamSection: React.FC = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-6">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
            <img src={member.imageUrl} alt={member.name} className="w-full h-64 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-bold">{member.name}</h3>
            <p className="text-gray-600 mb-4">{member.title}</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-500">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
