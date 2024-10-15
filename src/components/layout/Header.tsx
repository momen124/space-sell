'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Rocket, Search, Bell, User } from 'lucide-react'
import { FaHome, FaComments, FaUser, FaSignInAlt, FaUserPlus, FaPlus, FaSearch } from 'react-icons/fa'

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Searching for:', searchQuery)
  }

  return (
    <>
      {/* First Header Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo and title */}
          <Link href="/" className="flex items-center space-x-2">
            <Rocket className="h-6 w-6 text-blue-300" />
            <span className="text-2xl font-bold">Space Sell</span>
          </Link>

          {/* Search bar */}
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

          {/* Navigation and actions */}
          <nav className="flex items-center space-x-4">
            <Link href="/" className="flex items-center text-gray-200 hover:text-blue-200">
              <FaHome className="mr-1" /> Home
            </Link>
            <Link href="/categories" className="flex items-center text-gray-200 hover:text-blue-200">
              <FaSearch className="mr-1" /> Categories
            </Link>
            <Link href="/chat" className="flex items-center text-gray-200 hover:text-blue-200">
              <FaComments className="mr-1" /> Chat
            </Link>
            <Link href="/login" className="flex items-center text-gray-200 hover:text-blue-200">
              <FaSignInAlt className="mr-1" /> Login
            </Link>
            <Link href="/register" className="flex items-center text-gray-200 hover:text-blue-200">
              <FaUserPlus className="mr-1" /> Register
            </Link>
            <Link href="/profile" className="flex items-center text-gray-200 hover:text-blue-200">
              <FaUser className="mr-1" /> Profile
            </Link>
            <Link href="/create" className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              <FaPlus className="mr-1" /> Post Ad
            </Link>

            {/* Notifications dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:text-blue-200">
                  <Bell className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>New message from John</DropdownMenuItem>
                <DropdownMenuItem>Your ad was approved</DropdownMenuItem>
                <DropdownMenuItem>New comment on your post</DropdownMenuItem>
                <DropdownMenuItem>System update available</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>View all notifications</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* User avatar and dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                  <AvatarFallback>AJ</AvatarFallback>
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

      {/* Second Header Section */}
      <header className="bg-white shadow-md">
        <nav className="container mx-auto p-4 flex justify-between">
          <h1 className="text-xl font-bold text-blue-600">Space Sell</h1>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-600">Home</a></li>
            <li><a href="#" className="text-gray-600">Settings</a></li>
          </ul>
        </nav>
      </header>
    </>
  )
}
