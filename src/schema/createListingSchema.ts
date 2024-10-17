import * as z from 'zod'

export const createListingSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  price: z.number().min(0, 'Price must be a positive number'),
  category: z.string().nonempty('Category is required'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
})
