import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { listingService } from '@/service/listingService';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

export default function Home() {
  const {isLoading, data} = useQuery(listingService.getQueryOptions("getListings"))

  if (isLoading) {
    return <div>Loading...</div>; // Optional loading state
  }

  return (
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
        {data?.map((listing) => (
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
  );
}
