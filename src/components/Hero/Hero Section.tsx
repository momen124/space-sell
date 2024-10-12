// src/components/HeroSection.tsx

import React from 'react';
import Input from "@/components/ui/input"; // Importing the Input component using default export
import { Button } from "@/components/ui/button"; // Importing the Button component from ShadCN UI
import { Search } from 'lucide-react'; // Importing the Search icon

const HeroSection: React.FC = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white rounded-lg p-8 mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Space Sell</h1> {/* Main heading */}
        <p className="text-xl mb-6">Your one-stop shop for all things space-related</p> {/* Description */}
        <div className="flex max-w-md mx-auto">
          <Input type="text" placeholder="Search for items..." className="rounded-r-none" /> {/* Search input field */}
          <Button type="submit" className="rounded-l-none">
            <Search className="mr-2 h-4 w-4" /> Search {/* Search button with icon */}
          </Button>
        </div>
      </section>
    </main>
  );
};

export default HeroSection; // Exporting the HeroSection component
