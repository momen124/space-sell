'use client'

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
import { Rocket, Search, User, LogOut, Settings, ShoppingCart, PlusCircle } from 'lucide-react'

export function Header() {
  const [searchQuery, setSearchQuery] = useState('')

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
        
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex-1 max-w-md mx-4 hidden sm:block">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </form>
        
        {/* Navigation and Profile Menu */}
        <nav className="flex items-center space-x-4">
          <Link href="/listings" passHref>
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
              <Avatar className="cursor-pointer">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                <AvatarFallback>
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/profile/1" className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/settings" className="flex items-center space-x-2">
                  <Settings className="h-4 w-4" />
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center space-x-2 text-red-600">
                <LogOut className="h-4 w-4" />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  )
}
