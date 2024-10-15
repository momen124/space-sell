// src/app/categories/page.tsx
'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Laptop, Car, Home, Sofa } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const categories = [
  { 
    name: 'Electronics', 
    icon: Laptop, 
    items: [
      { name: 'Smartphone', description: 'Latest model with advanced features', image: '/placeholder.svg?height=200&width=300' },
      { name: 'Laptop', description: 'High-performance for work and gaming', image: '/placeholder.svg?height=200&width=300' },
      { name: 'Smartwatch', description: 'Track your fitness and stay connected', image: '/placeholder.svg?height=200&width=300' }
    ] 
  },
  { 
    name: 'Vehicles', 
    icon: Car, 
    items: [
      { name: 'Car', description: 'Fuel-efficient and comfortable ride', image: '/placeholder.svg?height=200&width=300' },
      { name: 'Motorcycle', description: 'Sleek design for urban commuting', image: '/placeholder.svg?height=200&width=300' },
      { name: 'Bicycle', description: 'Eco-friendly transportation option', image: '/placeholder.svg?height=200&width=300' }
    ] 
  },
  { 
    name: 'Real Estate', 
    icon: Home, 
    items: [
      { name: 'Apartment', description: 'Modern living in the heart of the city', image: '/placeholder.svg?height=200&width=300' },
      { name: 'House', description: 'Spacious family home with a garden', image: '/placeholder.svg?height=200&width=300' },
      { name: 'Office', description: 'Professional space for your business', image: '/placeholder.svg?height=200&width=300' }
    ] 
  },
  { 
    name: 'Furniture', 
    icon: Sofa, 
    items: [
      { name: 'Sofa', description: 'Comfortable seating for your living room', image: '/placeholder.svg?height=200&width=300' },
      { name: 'Dining Table', description: 'Elegant design for family meals', image: '/placeholder.svg?height=200&width=300' },
      { name: 'Bed', description: 'Luxurious sleep experience', image: '/placeholder.svg?height=200&width=300' }
    ] 
  },
]

const CategoryList = ({ onCategoryClick }: { onCategoryClick: (category: string) => void }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {categories.map((category) => (
      <Card key={category.name} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer" onClick={() => onCategoryClick(category.name)}>
        <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
          <CardTitle className="text-center flex flex-col items-center">
            {React.createElement(category.icon, { size: 48, className: "mb-2" })}
            {category.name}
          </CardTitle>
        </CardHeader>
      </Card>
    ))}
  </div>
)

export default function CategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedItem, setSelectedItem] = useState<{ name: string, description: string, image: string } | null>(null)

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category)
    setSelectedItem(null)
  }

  const handleItemClick = (item: { name: string, description: string, image: string }) => {
    setSelectedItem(item)
  }

  const filteredItems = selectedCategory
    ? categories.find(c => c.name === selectedCategory)?.items || []
    : []

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Browse Categories</h1>
        <CategoryList onCategoryClick={handleCategoryClick} />
        {selectedCategory && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Items in {selectedCategory}</h2>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {filteredItems.map((item, index) => (
                <li key={index} 
                    className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-300 cursor-pointer"
                    onClick={() => handleItemClick(item)}>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        )}
        {selectedItem && (
          <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">{selectedItem.name}</h3>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 mb-4 md:mb-0 md:mr-4">
                <Image src={selectedItem.image} alt={selectedItem.name} width={300} height={200} className="rounded-lg" />
              </div>
              <div className="md:w-1/2">
                <p className="text-gray-700">{selectedItem.description}</p>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
