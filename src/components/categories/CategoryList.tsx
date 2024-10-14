import React from 'react'
import CategoryCard from './category-card'

interface Category {
  title: string
  imageUrl: string
  slug: string
}

const categories: Category[] = [
  { title: 'Electronics', imageUrl: '/placeholder.svg?height=300&width=400', slug: 'electronics' },
  { title: 'Furniture', imageUrl: '/placeholder.svg?height=300&width=400', slug: 'furniture' },
  { title: 'Clothing', imageUrl: '/placeholder.svg?height=300&width=400', slug: 'clothing' },
]

export default function CategoryList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {categories.map((category) => (
        <CategoryCard 
          key={category.slug} 
          title={category.title} 
          imageUrl={category.imageUrl} 
          slug={category.slug} 
        />
      ))}
    </div>
  )
}