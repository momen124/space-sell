import OurStory from "@/components/About/OurStory";
import Statistics from "@/components/About/Statistics";
import TeamSection from "@/components/About/TeamSection";
import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <OurStory />
      <Statistics />
      <TeamSection />
    </div>
  );
};

export default AboutPage;
