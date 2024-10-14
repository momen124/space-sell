'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, ShoppingCart, User, Menu, X, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Placeholder data
const categories = [
  { id: 1, name: "Electronics", icon: "💻" },
  { id: 2, name: "Clothing", icon: "👕" },
  { id: 3, name: "Home & Garden", icon: "🏡" },
  { id: 4, name: "Sports", icon: "⚽" },
  { id: 5, name: "Books", icon: "📚" },
  { id: 6, name: "Toys", icon: "🧸" },
]

const featuredProducts = [
  { id: 1, name: "Wireless Earbuds", price: 79.99, image: "/placeholder.svg?height=200&width=200", rating: 4.5 },
  { id: 2, name: "Smart Watch", price: 199.99, image: "/placeholder.svg?height=200&width=200", rating: 4.2 },
  { id: 3, name: "Bluetooth Speaker", price: 59.99, image: "/placeholder.svg?height=200&width=200", rating: 4.0 },
  { id: 4, name: "Laptop", price: 999.99, image: "/placeholder.svg?height=200&width=200", rating: 4.8 },
]

export function HomepageComponent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-primary">
              ShopNow
            </Link>
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-10 pr-4 py-2 w-64"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
              <Button variant="ghost">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Cart
              </Button>
              <Button variant="ghost">
                <User className="mr-2 h-5 w-5" />
                Account
              </Button>
            </div>
            <Button variant="ghost" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white py-2">
            <div className="container mx-auto px-4 space-y-2">
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full"
              />
              <Button variant="ghost" className="w-full justify-start">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Cart
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <User className="mr-2 h-5 w-5" />
                Account
              </Button>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to ShopNow</h1>
            <p className="text-xl mb-8">Discover amazing products at unbeatable prices</p>
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Shop Now
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Browse Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Browse Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category) => (
                <Card key={category.id} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-4xl">{category.icon}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h3 className="font-semibold">{category.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Listings */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                  <CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
                    <div className="flex items-center mt-2">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="ml-2 text-gray-600">{product.rating.toFixed(1)}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Add to Cart</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-400">ShopNow is your one-stop destination for all your shopping needs. We offer a wide range of products at competitive prices.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white">Contact Us</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">FAQs</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Shipping Information</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Returns & Exchanges</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white">Home</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Shop</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Categories</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">My Account</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-2">Subscribe to our newsletter for the latest updates and offers.</p>
              <form className="flex">
                <Input type="email" placeholder="Your email" className="rounded-r-none" />
                <Button type="submit" className="rounded-l-none">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2024 ShopNow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}