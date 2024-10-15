'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Filter, MapPin, Calendar, DollarSign } from 'lucide-react'

const formSchema = z.object({
  category: z.string(),
  minPrice: z.number().optional().nullable(),
  maxPrice: z.number().optional().nullable(),
  location: z.string(),
  datePosted: z.string(),
})

type FormValues = z.infer<typeof formSchema>

interface SearchFiltersProps {
  onFilterChange: (filters: FormValues) => void
}

export default function SearchFilters({ onFilterChange }: SearchFiltersProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: 'All Categories',
      minPrice: null,
      maxPrice: null,
      location: '',
      datePosted: 'Any time',
    },
  })

  const onSubmit = (values: FormValues) => {
    onFilterChange(values)
  }

  return (
    <Card className="shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 border-none transition-all duration-300 hover:shadow-xl">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
        <CardTitle className="text-2xl font-bold flex items-center">
          <Filter className="w-6 h-6 mr-2" />
          Search Filters
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-semibold">Category</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-white border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
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

            <div className="flex space-x-4">
              <FormField
                control={form.control}
                name="minPrice"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-gray-700 font-semibold flex items-center">
                      <DollarSign className="w-4 h-4 mr-1" />
                      Min Price
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Min"
                        {...field}
                        value={field.value ?? ''}
                        onChange={e => {
                          const value = e.target.value
                          field.onChange(value ? Number(value) : null)
                        }}
                        className="bg-white border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                    <FormLabel className="text-gray-700 font-semibold flex items-center">
                      <DollarSign className="w-4 h-4 mr-1" />
                      Max Price
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Max"
                        {...field}
                        value={field.value ?? ''}
                        onChange={e => {
                          const value = e.target.value
                          field.onChange(value ? Number(value) : null)
                        }}
                        className="bg-white border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-semibold flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    Location
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter location"
                      {...field}
                      value={field.value ?? ''}
                      className="bg-white border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="datePosted"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-semibold flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    Date Posted
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-white border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
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

            <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center">
              <Search className="w-4 h-4 mr-2" />
              Apply Filters
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}