'use client';

import { useState } from 'react'
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
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaHome, FaComments, FaUser, FaSignInAlt, FaUserPlus, FaPlus, FaSearch } from 'react-icons/fa'
import { Rocket, Search, Bell, User, Lock, Moon, Sun } from 'lucide-react'

const Layout = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Searching for:', searchQuery)
  }

  return (
    <>
      {/* Header */}
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

      {/* Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">
          {/* Top section with logo, about, quick links, and social media icons */}
          <div className="flex flex-wrap justify-between items-start mb-6">
            {/* Logo and description */}
            <div className="w-full md:w-1/4 mb-4">
              <div className="flex items-center space-x-2">
                <img src="/logo.png" alt="Logo" className="h-10" />
                <span className="text-2xl font-bold">Space Sell</span>
              </div>
              <p className="text-sm mt-2">
                Space Sell is your go-to platform for buying and selling anything in your local community.
              </p>
            </div>

            {/* Quick Links */}
            <div className="w-full md:w-1/4 mb-4">
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="/about" className="hover:text-blue-400">About Us</Link>
                <Link href="/contact" className="hover:text-blue-400">Contact</Link>
                <Link href="/faq" className="hover:text-blue-400">FAQ</Link>
                <Link href="/terms" className="hover:text-blue-400">Terms & Conditions</Link>
              </nav>
            </div>

            {/* Follow Us */}
            <div className="w-full md:w-1/4 mb-4">
              <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                  <FaFacebook className="h-6 w-6" />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                  <FaTwitter className="h-6 w-6" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                  <FaInstagram className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
                  <FaLinkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Divider line */}
          <hr className="border-gray-700 mb-6" />

          {/* Bottom section with copyright and additional links */}
          <div className="flex flex-wrap justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Space Sell. All Rights Reserved.
            </p>

            <nav className="flex space-x-4">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white text-sm">Cookie Policy</Link>
            </nav>
          </div>

          {/* Additional icons */}
          <div className="flex items-center justify-between mt-6">
            <p className="text-sm text-gray-500">© 2024 Your Company</p>
            <div className="flex items-center space-x-4">
              <Lock className="w-5 h-5 text-gray-600" />
              <Sun className="w-5 h-5 text-yellow-400" />
              <Moon className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Layout;
