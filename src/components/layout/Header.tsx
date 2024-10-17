// src/components/Header.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Rocket, Search, User, ShoppingCart, PlusCircle, Bell } from 'lucide-react';
import { useCart } from '@/context/cart'; // Import the cart context

export function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const { totalItems } = useCart(); // Use cart context to get total items

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="border-b bg-white shadow-sm py-4">
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Rocket className="h-6 w-6 text-blue-500" />
          <span className="text-xl font-bold ml-2">Space Sell</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-lg font-medium hover:underline">
            Home
          </Link>
          <Link href="/listing/ListingsPage" className="text-lg font-medium hover:underline">
            Shop
          </Link>
          <Link href="/auth/register" className="text-lg font-medium hover:underline">
            Sign Up
          </Link>
        </nav>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex items-center space-x-2 ml-4">
          <Input
            type="search"
            placeholder="What are you looking for?"
            className="pl-4 w-64 hidden lg:block"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            required
          />
          <button type="submit" className="p-2">
            <Search className="h-5 w-5 text-gray-600" />
          </button>
        </form>
        
        {/* Navigation and Profile Menu */}
        <nav className="flex items-center space-x-6">
          <Link href="/notification/notificationpage" passHref>
            <Button variant="ghost" className="p-2">
              <Bell className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="/cart/CartPage" passHref>
            <Button variant="ghost" className="p-2 relative">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
                  {totalItems}
                </span>
              )}
            </Button>
          </Link>
          <Link href="/create-listing" passHref>
            <Button variant="ghost" className="p-2">
              <PlusCircle className="h-5 w-5" />
            </Button>
          </Link>

          {/* Profile Link */}
          <Link href="/profiles/ProfileEditPage" passHref>
            <Avatar className="cursor-pointer bg-red-500">
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
              <AvatarFallback>
                <User className="h-4 w-4 text-white" />
              </AvatarFallback>
            </Avatar>
          </Link>
        </nav>
      </div>
    </header>
  );
}
