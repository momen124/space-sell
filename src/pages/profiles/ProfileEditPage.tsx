// src/pages/profile/edit.tsx

import React from "react";
import Link from "next/link";
import ProfileEditForm from "@/components/forms/ProfileEditForm";
// Temporarily remove RootLayout to test if it’s causing circular references
// import RootLayout from "@/pages/layout";

const ProfileEditPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex">
      {/* Sidebar Navigation */}
      <aside className="w-1/4 pr-8">
        <nav className="flex flex-col space-y-4">
          <h3 className="font-bold text-lg">Manage My Account</h3>
          <Link href="/profile/edit" className="text-red-500">
            My Profile
          </Link>
          
          <h3 className="font-bold text-lg mt-4">My Wishlist</h3>
          <Link href="/wishlist/WishlistPage" className="text-gray-700 hover:text-red-500">
            My WishList
          </Link>
        </nav>
      </aside>

      {/* Profile Edit Form */}
      <main className="w-3/4 p-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6 text-red-500">Edit Your Profile</h2>
        <ProfileEditForm />
      </main>
    </div>
  );
};

export default ProfileEditPage;
