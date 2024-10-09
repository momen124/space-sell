'use client';

import EditProfile from '@/components/profile/EditProfile';
import { useAuth } from '@/hooks/useAuth';

export default function EditProfilePage() {
  const { user } = useAuth();

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Edit Your Profile</h1>
      <div className="max-w-lg mx-auto">
        <EditProfile user={user} />
      </div>
    </div>
  );
}
