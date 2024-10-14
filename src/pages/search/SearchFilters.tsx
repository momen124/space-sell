'use client'

import React from 'react'
import { useForm } from 'react-hook-form' // Import the useForm hook from react-hook-form
import { zodResolver } from '@hookform/resolvers/zod' // Import the Zod resolver for form validation
import * as z from 'zod' // Import Zod for schema validation
import { Button } from "@/components/ui/button" // Import Button component
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form" // Import form components
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select" // Import select components
import { Input } from "@/components/ui/input" // Import Input component
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card" // Import Card components

// Define the form schema using Zod
const formSchema = z.object({
  category: z.string(), // Category field as string
  minPrice: z.number().optional().nullable(), // Min price field as optional number or null
  maxPrice: z.number().optional().nullable(), // Max price field as optional number or null
  location: z.string(), // Location field as string
  datePosted: z.string(), // Date posted field as string
})

// Infer types from the form schema
type FormValues = z.infer<typeof formSchema>

// Define the props for the SearchFilters component
interface SearchFiltersProps {
  onFilterChange: (filters: FormValues) => void // Callback for when filters change
}

// Main SearchFilters component
export default function SearchFilters({ onFilterChange }: SearchFiltersProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema), // Use Zod resolver for form validation
    defaultValues: {
      category: 'All Categories', // Default category
      minPrice: null, // Default min price as null
      maxPrice: null, // Default max price as null
      location: '', // Default location as empty string
      datePosted: 'Any time', // Default date posted
    },
  })

  // Handle form submission
  function onSubmit(values: FormValues) {
    onFilterChange(values) // Call the onFilterChange prop with the form values
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Filters</CardTitle> {/* Title for the filters card */}
      </CardHeader>
      <CardContent>
      <Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
    {/* Category Field */}
    <FormField
      control={form.control}
      name="category"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Category</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="All Categories">All Categories</SelectItem>
              <SelectItem value="Electronics">Electronics</SelectItem>
              <SelectItem value="Vehicles">Vehicles</SelectItem>
              <SelectItem value="Real Estate">Real Estate</SelectItem>
              <SelectItem value="Furniture">Furniture</SelectItem>
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
    {/* Min and Max Price Fields */}
    <div className="flex space-x-2">
      <FormField
        control={form.control}
        name="minPrice"
        render={({ field }) => (
          <FormItem className="flex-1">
            <FormLabel>Min Price</FormLabel>
            <FormControl>
              <Input
                type="number"
                placeholder="Min"
                {...field}
                value={field.value ?? ""}
                onChange={(e) => {
                  const value = e.target.value;
                  field.onChange(value ? Number(value) : null);
                }}
              />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="maxPrice"
        render={({ field }) => (
          <FormItem className="flex-1">
            <FormLabel>Max Price</FormLabel>
            <FormControl>
              <Input
                type="number"
                placeholder="Max"
                {...field}
                value={field.value ?? ""}
                onChange={(e) => {
                  const value = e.target.value;
                  field.onChange(value ? Number(value) : null);
                }}
              />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
    {/* Other Fields */}
    {/* Location Field */}
    <FormField
      control={form.control}
      name="location"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Location</FormLabel>
          <FormControl>
            <Input
              placeholder="Enter location"
              {...field}
              value={field.value ?? ""}
            />
          </FormControl>
        </FormItem>
      )}
    />
    {/* Date Posted Field */}
    <FormField
      control={form.control}
      name="datePosted"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Date Posted</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select date range" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="Any time">Any time</SelectItem>
              <SelectItem value="Last 24 hours">Last 24 hours</SelectItem>
              <SelectItem value="Last 7 days">Last 7 days</SelectItem>
              <SelectItem value="Last 30 days">Last 30 days</SelectItem>
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
    <Button type="submit" className="w-full">
      Apply Filters
    </Button>
  </form>
</Form>

      </CardContent>
    </Card>
  )
}
