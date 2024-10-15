// ListingsPage.tsx
'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { listingService } from '@/service/listingService';
import { Listing } from '@/types/listing';

export default function ListingsPage() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');

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

  const filteredListings = listings.filter(listing => 
    listing.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (category === '' || listing.category?.toLowerCase() === category.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-8">All Listings</h1>
      
      <div className="flex justify-between mb-8">
        <Input 
          type="text" 
          placeholder="Search listings..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All Categories</SelectItem>
            <SelectItem value="Vehicles">Vehicles</SelectItem>
            <SelectItem value="Equipment">Equipment</SelectItem>
            <SelectItem value="Weapons">Weapons</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredListings.map((listing) => (
          <Link href={`/listing/${listing.id}`} key={listing.id} className="border p-4 rounded-lg hover:shadow-md transition-shadow">
            <img src={listing.image} alt={listing.title} className="w-full h-40 object-cover mb-2 rounded" />
            <h3 className="font-semibold">{listing.title}</h3>
            <p className="text-lg font-bold text-green-600">${listing.price.toLocaleString()}</p>
            <p className="text-sm text-gray-500">{listing.category || "Uncategorized"}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
