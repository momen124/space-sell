'use client';

import Link from 'next/link'
import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Rocket, Search, User, LogOut, Settings, ShoppingCart, PlusCircle, Bell, XCircle, Package, Star } from 'lucide-react'

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
          <span className="text-xl font-bold">Space Sell</span>
        </Link>

         {/* Navigation Links */}
         <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-lg font-medium hover:underline">
            Home
          </Link>
          <Link href="/contact" className="text-lg font-medium hover:underline">
            Contact
          </Link>
          <Link href="/about" className="text-lg font-medium hover:underline">
            About
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
            <Button className="p-2">
              <PlusCircle className="h-5 w-5" />
            </Button>
          </Link>
          
        {/* Profile Dropdown */}
        <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className="cursor-pointer bg-red-500">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                <AvatarFallback>
                  <User className="h-4 w-4 text-white" />
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
              <DropdownMenuItem className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <Link href="/profiles/ProfileEditPage" className="hover:text-gray-300">
                  Manage My Account
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center space-x-2">
                <Package className="h-4 w-4" />
                <Link href="/orders" className="hover:text-gray-300">
                  My Orders
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center space-x-2">
                <XCircle className="h-4 w-4" />
                <Link href="/cancellations" className="hover:text-gray-300">
                  My Cancellations
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center space-x-2">
                <Star className="h-4 w-4" />
                <Link href="/reviews" className="hover:text-gray-300">
                  My Reviews
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex items-center space-x-2 text-red-400">
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  );
}
