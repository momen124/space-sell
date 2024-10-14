import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface SearchResultItemProps {
  imageUrl: string
  title: string
  price: string
  location: string
}

export default function SearchResultItem({ imageUrl, title, price, location }: SearchResultItemProps) {
  return (
    <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-md">
      <div className="relative w-full h-48">
        <Image
          src={imageUrl}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold text-primary">{price}</p>
        <p className="text-sm text-muted-foreground">{location}</p>
      </CardContent>
    </Card>
  )
}