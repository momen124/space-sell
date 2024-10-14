// components/SearchFilters.tsx

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Define the form schema using Zod
const formSchema = z.object({
  category: z.string(),
  minPrice: z.number().optional().nullable(),
  maxPrice: z.number().optional().nullable(),
  location: z.string(),
  datePosted: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

interface SearchFiltersProps {
  onFilterChange: (filters: FormValues) => void;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ onFilterChange }) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: 'All Categories',
      minPrice: null,
      maxPrice: null,
      location: '',
      datePosted: 'Any time',
    },
  });

  const onSubmit = (values: FormValues) => {
    onFilterChange(values);
  };

  return (
    <Card className="shadow-lg transition-transform transform hover:scale-105 duration-300">
      <CardHeader>
        <CardTitle>Filters</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Category field */}
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

            {/* Price fields */}
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
                        value={field.value ?? ''}
                        onChange={e => {
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
                        value={field.value ?? ''}
                        onChange={e => {
                          const value = e.target.value;
                          field.onChange(value ? Number(value) : null);
                        }}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            {/* Location field */}
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
                      value={field.value ?? ''}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Date posted field */}
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

            <Button type="submit" className="w-full">Apply Filters</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default SearchFilters;
