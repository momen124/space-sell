import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Rocket, Moon, User } from 'lucide-react';

// Define a type for the listing item
export interface Listing {
  id: number;
  title: string;
  price: string;
  image: string;
}

// Simulate fetching data with a defined type
async function getFeatureListings(): Promise<Listing[]> {
  // In a real app, this would fetch from an API or database
  return [
    { id: 1, title: "Spaceship X2000", price: "$999,999", image: "/placeholder.svg?height=200&width=300" },
    { id: 2, title: "Moon Rover", price: "$50,000", image: "/placeholder.svg?height=200&width=300" },
    { id: 3, title: "Space Suit", price: "$25,000", image: "/placeholder.svg?height=200&width=300" },
  ];
}

export default function Home() {
  // Define the state with a type of Listing array
  const [featuredListings, setFeaturedListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch listings when the component mounts
    async function fetchListings() {
      const listings = await getFeatureListings();
      setFeaturedListings(listings);
      setLoading(false);
    }

    fetchListings();
  }, []);

  if (loading) {
    // Display loading state while fetching data
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">Space Sell</Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/categories" className="text-gray-600 hover:text-blue-600">Categories</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-blue-600">About</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white rounded-lg p-8 mb-12">
          <h1 className="text-4xl font-bold mb-4">Welcome to Space Sell</h1>
          <p className="text-xl mb-6">Your one-stop shop for all things space-related</p>
          <div className="flex max-w-md mx-auto">
            <Input type="text" placeholder="Search for items..." className="rounded-r-none" />
            <Button type="submit" className="rounded-l-none">
              <Search className="mr-2 h-4 w-4" /> Search
            </Button>
          </div>
        </section>

        {/* Featured Listings */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Featured Listings</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredListings.map((listing: Listing) => (
              <Link href={`/listing/${listing.id}`} key={listing.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img src={listing.image} alt={listing.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{listing.title}</h3>
                  <p className="text-xl font-bold text-blue-600">{listing.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Additional Featured Listings */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">More Featured Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredListings.map((listing: Listing) => (
              <Link href={`/listing/${listing.id}`} key={listing.id} className="border p-4 rounded-lg hover:shadow-md transition-shadow">
                <img src={listing.image} alt={listing.title} className="w-full h-40 object-cover mb-2 rounded" />
                <h3 className="font-semibold">{listing.title}</h3>
                <p className="text-lg font-bold text-green-600">{listing.price}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-white rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Rocket className="mx-auto h-12 w-12 text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">Browse</h3>
              <p className="text-gray-600">Explore our wide range of space items</p>
            </div>
            <div className="text-center">
              <Moon className="mx-auto h-12 w-12 text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">Choose</h3>
              <p className="text-gray-600">Select the perfect space gear for your needs</p>
            </div>
            <div className="text-center">
              <User className="mx-auto h-12 w-12 text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">Buy</h3>
              <p className="text-gray-600">Secure your items with our easy checkout process</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <Button asChild className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
            <Link href="/create-listing">Create a Listing</Link>
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-12 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Space Sell</h3>
              <p className="text-gray-400">Your trusted marketplace for space equipment and accessories.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
                <li><Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-400">Email: info@spacesell.com</p>
              <p className="text-gray-400">Phone: (123) 456-7890</p>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; 2023 Space Sell. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
