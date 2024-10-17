// src/pages/listings/[id].tsx

import { useState } from 'react';
import Link from 'next/link';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AdvancedFilter from '@/components/common/Filter';
import ProductSection from '@/components/common/ProductSection';
import RootLayout from '../layout';

const mockListings = [
  { id: "1", title: "Spaceship X2000", price: "999999", category: "Vehicles", imgSrc: "https://picsum.photos/300/200?random=1", rating: 4.5 },
  { id: "2", title: "Moon Rover", price: "50000", category: "Vehicles", imgSrc: "https://picsum.photos/300/200?random=2", rating: 4.0 },
  { id: "3", title: "Space Suit", price: "25000", category: "Equipment", imgSrc: "https://picsum.photos/300/200?random=3", rating: 3.5 },
  { id: "4", title: "Laser Gun", price: "5000", category: "Weapons", imgSrc: "https://picsum.photos/300/200?random=4", rating: 4.8 },
  { id: "5", title: "Oxygen Tank", price: "1000", category: "Equipment", imgSrc: "https://picsum.photos/300/200?random=5", rating: 3.0 },
];

export default function ListingsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [sortOption, setSortOption] = useState('featured');

  const filteredListings = mockListings
    .filter(listing =>
      listing.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (category === 'all' || listing.category === category)
    )

    useEffect(() => {
      const fetchListings = async () => {
        try {
          const data = await listingService.getListings();
          setListings(data);
        } catch (error) {
          console.error("Error fetching listings:", error);
        }
      };
  
      fetchListings();
    }, []);
    .sort((a, b) => {
      if (sortOption === 'price-low') return parseFloat(a.price) - parseFloat(b.price);
      if (sortOption === 'price-high') return parseFloat(b.price) - parseFloat(a.price);
      if (sortOption === 'title') return a.title.localeCompare(b.title);
      return 0; // Default sort: featured
    });

  return (
    <RootLayout>
      <main className="container mx-auto py-8 flex space-x-8">
        {/* Sidebar Filter Section */}
        <aside className="w-1/4">
          <h2 className="text-xl font-bold mb-4">Filter Results</h2>
          {/* Advanced Filter Section */}
          <AdvancedFilter />
        </aside>

        {/* Listings Section */}
        <section className="w-3/4">
          <ProductSection
            title="All Listings"
            products={filteredListings.map(listing => ({
              id: listing.id,
              title: listing.title,
              price: `$${parseFloat(listing.price).toLocaleString()}`,
              imgSrc: listing.imgSrc,
              link: `/listing/${listing.id}`
            }))}
          />
        </section>
      </main>
    </RootLayout>
  );
}
