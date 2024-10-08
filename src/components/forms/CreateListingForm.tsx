'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createListingSchema } from '@/schema/createListingSchema'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { z } from 'zod';

type CreateListingFormData = z.infer<typeof createListingSchema>

export default function CreateListingForm() {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<CreateListingFormData>({
    resolver: zodResolver(createListingSchema),
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (data: CreateListingFormData) => {
    setIsSubmitting(true)
    console.log(data)
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
    setIsSubmitting(false)
    alert('Listing created successfully!')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="title">Title</Label>
        <Input id="title" {...register('title')} className="mt-1" />
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
      </div>
      <div>
        <Label htmlFor="price">Price</Label>
        <Input id="price" type="number" {...register('price')} className="mt-1" />
        {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>}
      </div>
      <div>
        <Label htmlFor="category">Category</Label>
        <Select onValueChange={(value) => setValue("category", value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Vehicles">Vehicles</SelectItem>
            <SelectItem value="Equipment">Equipment</SelectItem>
            <SelectItem value="Weapons">Weapons</SelectItem>
          </SelectContent>
        </Select>
        {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" {...register('description')} className="mt-1" />
        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
      </div>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Creating...' : 'Create Listing'}
      </Button>
    </form>
  )
}
