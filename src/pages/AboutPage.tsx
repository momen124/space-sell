import OurStory from "@/components/layout/footer/About/OurStory";
import Statistics from "@/components/layout/footer/About/Statistics";
import TeamSection from "@/components/layout/footer/About/TeamSection";
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
