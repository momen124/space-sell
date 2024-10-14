import React from 'react'
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

const CategoryList = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {['Electronics', 'Vehicles', 'Real Estate', 'Furniture'].map((category) => (
      <Card key={category}>
        <CardHeader>
          <CardTitle>{category}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Browse items in {category}</p>
        </CardContent>
      </Card>
    ))}
  </div>
)

export default function CategoriesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-3xl font-bold mb-6">Categories</h1>
        <CategoryList />
      </main>
      <Footer />
    </div>
  )
}