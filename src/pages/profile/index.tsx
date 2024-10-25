import ProfileEditForm from "@/components/forms/ProfileEditForm";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

const ProfileEditPage: React.FC = () => {
  return (
    <>
    <div className="container mx-auto px-4 py-8 flex">
      {/* Sidebar Navigation */}
      <aside className="w-1/4 pr-8">
        <nav className="flex flex-col space-y-4">
          <h3 className="font-bold text-lg">Manage My Account</h3>
          <Link href="/profile" className="text-red-500">
            My Profile
          </Link>

          <Link href="/wishlist" className="text-gray-700 hover:text-red-500">
            My Wishlist
          </Link>
        </nav>
      </aside>

      {/* Profile Edit Form */}
      <main className="w-3/4 p-6 bg-white rounded-lg shadow">
      <div className="flex flex-1 justify-between">
        <h2 className="text-2xl font-bold mb-6 text-red-500">Edit Your Profile</h2>
        <Button variant="destructive" onClick={()=>{
          signOut()
        }}>Sign Out</Button>
        </div>
        <ProfileEditForm />
      </main>
    </div>
    </>
  );
};

export default ProfileEditPage;
