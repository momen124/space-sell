'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { User } from '@/types/user';
import { useAuth } from '@/hooks/useAuth';

export default function UserProfile() {
  const [user, setUser] = useState<User | null>(null);
  const { getUserProfile } = useAuth();
  const router = useRouter();

  useEffect(() => {
    async function fetchUser() {
      try {
        const profile = await getUserProfile();
        setUser(profile);
      } catch (error) {
        console.error('Failed to fetch user profile:', error);
        router.push('/login');
      }
    }

    fetchUser();
  }, [getUserProfile, router]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <Avatar className="h-24 w-24 mr-4">
          <AvatarImage src={user.avatarUrl || '/placeholder.svg?height=96&width=96'} alt={user.name} />
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-3xl font-bold">{user.name}</h1>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-sm text-gray-500">Member since: {new Date(user.joinDate).toLocaleDateString()}</p>
          <Link href="/profile/edit">
            <Button variant="outline" className="mt-4">Edit Profile</Button>
          </Link>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Your Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {user.listings.map((listing) => (
            <Link href={`/listing/${listing.id}`} key={listing.id} className="border p-4 rounded-lg hover:shadow-md transition-shadow">
              <img src={listing.image || '/placeholder.svg?height=100&width=100'} alt={listing.title} className="w-full h-40 object-cover mb-2 rounded" />
              <h3 className="font-semibold">{listing.title}</h3>
              <p className="text-lg font-bold text-green-600">${listing.price.toLocaleString()}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}