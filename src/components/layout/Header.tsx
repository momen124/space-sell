'use client';

import Link from 'next/link'
import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Rocket, Search, User, ShoppingCart, PlusCircle, Bell } from 'lucide-react'

export function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Searching for:', searchQuery)
  }

  return (
    <header className="border-b bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        
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
        <nav className="flex items-center space-x-4">
          <Link href="/notification/notificationpage" passHref>
            <Button variant="ghost" className="p-2">
              <Bell className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="/cart/CartPage" passHref>
            <Button variant="ghost" className="p-2">
              <ShoppingCart className="h-5 w-5" />
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
