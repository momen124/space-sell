'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button"; // Import ShadCN button
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Rocket, Search, User } from 'lucide-react'; // Logo icon
import { FaHome, FaComments, FaUser, FaSignInAlt, FaUserPlus, FaPlus, FaSearch } from 'react-icons/fa'; // Navigation icons including FaSearch

export function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="border-b bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Rocket className="h-6 w-6 text-blue-500" /> {/* Logo icon */}
          <span className="text-xl font-bold">Space Sell</span>
        </Link>

        <form onSubmit={handleSearch} className="flex-1 max-w-sm mx-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for items..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              required
            />
          </div>
        </form>

        <nav className="flex items-center space-x-4">
          <Link href="/" className="flex items-center text-gray-600 hover:text-blue-500">
            <FaHome className="mr-1" /> Home
          </Link>
          <Link href="/search-results" className="flex items-center text-gray-600 hover:text-blue-500">
            <FaSearch className="mr-1" /> Search
          </Link>
          <Link href="/chat" className="flex items-center text-gray-600 hover:text-blue-500">
            <FaComments className="mr-1" /> Chat
          </Link>
          <Link href="/login" className="flex items-center text-gray-600 hover:text-blue-500">
            <FaSignInAlt className="mr-1" /> Login
          </Link>
          <Link href="/register" className="flex items-center text-gray-600 hover:text-blue-500">
            <FaUserPlus className="mr-1" /> Register
          </Link>
          <Link href="/profile" className="flex items-center text-gray-600 hover:text-blue-500">
            <FaUser className="mr-1" /> Profile
          </Link>
          <Link href="/create" className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            <FaPlus className="mr-1" /> Post Ad
          </Link>
          
          {/* Use ShadCN button here */}
          <Button variant="outline" className="hidden md:block">
            Explore
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                <AvatarFallback>
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/profile/1">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  );
}

