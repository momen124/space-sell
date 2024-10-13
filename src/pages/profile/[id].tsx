import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface User {
  id: string;
  name: string;
  email: string;
  joinDate: string;
}

interface Listing {
  id: number;
  title: string;
  price: number;
}

// Simulated async data fetcher for user details
async function getUser(id: string): Promise<User | null> {
  const users = [
    { id: "1", name: "John Doe", email: "john@example.com", joinDate: "2023-01-01" },
  ]
  
  return users.find(u => u.id === id) || null
}

// Simulated async data fetcher for user listings
async function getUserListings(userId: string): Promise<Listing[]> {
  return [
    { id: 1, title: "Spaceship X2000", price: 999999 },
    { id: 2, title: "Moon Rover", price: 50000 },
  ]
}

export default async function UserProfilePage({ params }: { params: { id: string } }) {
  const user = await getUser(params.id)
  if (!user) {
    notFound()
  }

  const listings = await getUserListings(params.id)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <Avatar className="h-24 w-24 mr-4">
          <AvatarImage src="/placeholder.svg?height=96&width=96" alt={user.name} />
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-3xl font-bold">{user.name}</h1>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-sm text-gray-500">Member since: {new Date(user.joinDate).toLocaleDateString()}</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Listings</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {listings.map((listing) => (
          <Link href={`/listing/${listing.id}`} key={listing.id}>
            <div className="border p-4 rounded-lg hover:shadow-md transition-shadow">
              <img src="/placeholder.svg?height=100&width=100" alt={listing.title} className="w-full h-40 object-cover mb-2 rounded" />
              <h3 className="font-semibold">{listing.title}</h3>
              <p className="text-lg font-bold text-green-600">${listing.price.toLocaleString()}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
