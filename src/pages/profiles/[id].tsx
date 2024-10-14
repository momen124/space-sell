import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export async function getServerSideProps(context: { params: { id: string } }) {
  const { id } = context.params;

  const user = await getUser(id);
  if (!user) {
    return {
      notFound: true,
    };
  }

  const listings = await getUserListings(id);

  return {
    props: {
      user,
      listings,
    },
  };
}

// Mock function simulating fetching data from an API or database
async function getUser(id: string) {
  const users = [
    { id: "1", name: "John Doe", email: "john@example.com", joinDate: "2023-01-01" },
  ];
  
  const user = users.find((u) => u.id === id);
  if (!user) return null;
  return user;
}

// Mock function simulating fetching data from an API or database
async function getUserListings(userId: string) {
  return [
    { id: 1, title: "Spaceship X2000", price: 999999 },
    { id: 2, title: "Moon Rover", price: 50000 },
  ];
}

export default function UserProfilePage({ user, listings }: { user: any; listings: any[] }) {
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
          <Link href={`/listing/${listing.id}`} key={listing.id} className="border p-4 rounded-lg hover:shadow-md transition-shadow">
            <img src="/placeholder.svg?height=100&width=100" alt={listing.title} className="w-full h-40 object-cover mb-2 rounded" />
            <h3 className="font-semibold">{listing.title}</h3>
            <p className="text-lg font-bold text-green-600">${listing.price.toLocaleString()}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}