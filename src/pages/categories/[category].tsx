'use client'

import React from 'react'
import { useParams } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Placeholder components
const Header = () => (
  <header className="bg-primary text-primary-foreground p-4">
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">Space Sell</h1>
    </div>
  </header>
)

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground p-4 mt-8">
    <div className="container mx-auto text-center">
      <p>&copy; 2023 Space Sell. All rights reserved.</p>
    </div>
  </footer>
)

// Mock data for listings
const mockListings = [
  { id: 1, title: "Spaceship X2000", price: 999999, image: "/placeholder.svg?height=200&width=300" },
  { id: 2, title: "Moon Rover", price: 50000, image: "/placeholder.svg?height=200&width=300" },
  { id: 3, title: "Space Suit", price: 25000, image: "/placeholder.svg?height=200&width=300" },
]

export default function CategoryPage() {
  const params = useParams()
  const category = params.category as string

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-3xl font-bold mb-6 capitalize">{category}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockListings.map((listing) => (
            <Card key={listing.id}>
              <CardHeader>
                <CardTitle>{listing.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <img src={listing.image} alt={listing.title} className="w-full h-48 object-cover mb-4 rounded" />
                <p className="text-lg font-bold text-green-600">${listing.price.toLocaleString()}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}