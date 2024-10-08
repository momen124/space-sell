import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/footer';

async function getFeatureListings() {
  // In a real app, this would fetch from an API or database
  return [
    { id: 1, title: "Spaceship X2000", price: "$999,999", image: "/placeholder.svg?height=100&width=100" },
    { id: 2, title: "Moon Rover", price: "$50,000", image: "/placeholder.svg?height=100&width=100" },
    { id: 3, title: "Space Suit", price: "$25,000", image: "/placeholder.svg?height=100&width=100" },
  ];
}

export default function Home() {
  const [featuredListings, setFeaturedListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchListings() {
      const listings = await getFeatureListings();
      setFeaturedListings(listings);
      setLoading(false);
    }

    fetchListings();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Optional loading state
  }

  return (
    <>
    <Header/>
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-8">Welcome to Space Sell</h1>

      <div className="flex justify-center mb-8">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="text" placeholder="Search for items..." />
          <Button type="submit">Search</Button>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Featured Listings</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {featuredListings.map((listing) => (
          <Link href={`/listing/${listing.id}`} key={listing.id} className="border p-4 rounded-lg hover:shadow-md transition-shadow">
            <img src={listing.image} alt={listing.title} className="w-full h-40 object-cover mb-2 rounded" />
            <h3 className="font-semibold">{listing.title}</h3>
            <p className="text-lg font-bold text-green-600">{listing.price}</p>
          </Link>
        ))}
      </div>

      <div className="text-center mt-8">
        <Button asChild>
          <Link href="/create-listing">Create a Listing</Link>
        </Button>
      </div>
    </div>
    <Footer/>
    </>
  );
}
