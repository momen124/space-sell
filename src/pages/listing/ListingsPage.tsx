'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { ChevronDown, Star } from 'lucide-react'

const mockListings = [
  { id: 1, title: "Spaceship X2000", price: 999999, category: "Vehicles", image: "https://picsum.photos/300/200?random=1", rating: 4.5 },
  { id: 2, title: "Moon Rover", price: 50000, category: "Vehicles", image: "https://picsum.photos/300/200?random=2", rating: 4.0 },
  { id: 3, title: "Space Suit", price: 25000, category: "Equipment", image: "https://picsum.photos/300/200?random=3", rating: 3.5 },
  { id: 4, title: "Laser Gun", price: 5000, category: "Weapons", image: "https://picsum.photos/300/200?random=4", rating: 4.8 },
  { id: 5, title: "Oxygen Tank", price: 1000, category: "Equipment", image: "https://picsum.photos/300/200?random=5", rating: 3.0 },
]

export default function ListingsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('all')  // Set 'all' as the default category
  const [sortOption, setSortOption] = useState('featured')

  const filteredListings = mockListings
    .filter(listing => 
      listing.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (category === 'all' || listing.category === category)  // Treat 'all' as showing all categories
    )
    .sort((a, b) => {
      if (sortOption === 'price-low') return a.price - b.price
      if (sortOption === 'price-high') return b.price - a.price
      if (sortOption === 'title') return a.title.localeCompare(b.title)
      return 0 // Default sort: featured
    })

  return (
    <main className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-8">All Listings</h1>
      
      {/* Search, Filter, and Sort Options */}
      <div className="flex justify-between items-center mb-6">
        <Input 
          type="text" 
          placeholder="Search listings..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        
        <div className="flex items-center space-x-4">
          {/* Category Filter */}
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>  {/* Use 'all' as the value */}
              <SelectItem value="Vehicles">Vehicles</SelectItem>
              <SelectItem value="Equipment">Equipment</SelectItem>
              <SelectItem value="Weapons">Weapons</SelectItem>
            </SelectContent>
          </Select>

          {/* Sort Options */}
          <div className="flex items-center">
            <span className="mr-2">Sort by:</span>
            <Select value={sortOption} onValueChange={setSortOption}>
              <SelectTrigger className="flex items-center w-40">
                <SelectValue placeholder="Featured" />
                <ChevronDown size={20} className="ml-2" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="title">Title</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Listings Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredListings.map((listing) => (
          <div key={listing.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Link href={`/listing/${listing.id}`} passHref>
              <img src={listing.image} alt={listing.title} className="w-full h-48 object-cover cursor-pointer" />
            </Link>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{listing.title}</h3>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < Math.floor(listing.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">{listing.rating}</span>
              </div>
              <div className="text-xl font-bold">${listing.price.toLocaleString()}</div>
              <Button className="w-full mt-4">Add to Cart</Button>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
