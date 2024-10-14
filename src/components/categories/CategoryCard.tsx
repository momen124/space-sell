import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardHeader, CardTitle } from "@/components/ui/card" // Removed CardContent

interface CategoryCardProps {
  title: string
  imageUrl: string
  slug: string
}

export default function CategoryCard({ title, imageUrl, slug }: CategoryCardProps) {
  return (
    <Link href={`/categories/${slug}`}>
      <Card className="overflow-hidden hover:shadow-lg transition duration-300">
        <div className="relative w-full h-48">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
      </Card>
    </Link>
  )
}
