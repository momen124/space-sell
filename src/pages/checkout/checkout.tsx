'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/components/ui/use-toast"
import { CreditCard, Mail, MapPin, User } from 'lucide-react'

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  address: z.string().min(5, {
    message: "Address must be at least 5 characters.",
  }),
  city: z.string().min(2, {
    message: "City must be at least 2 characters.",
  }),
  zipCode: z.string().regex(/^\d{5}(-\d{4})?$/, {
    message: "Please enter a valid ZIP code.",
  }),
  cardNumber: z.string().regex(/^\d{16}$/, {
    message: "Please enter a valid 16-digit card number.",
  }),
  expirationDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, {
    message: "Please enter a valid expiration date (MM/YY).",
  }),
  cvv: z.string().regex(/^\d{3,4}$/, {
    message: "Please enter a valid CVV.",
  }),
})

export default function Checkout() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      address: "",
      city: "",
      zipCode: "",
      cardNumber: "",
      expirationDate: "",
      cvv: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log(values)
      toast({
        title: "Checkout successful!",
        description: "Your order has been placed.",
      })
    } catch (error) {
      toast({
        title: "Checkout failed",
        description: "There was a problem processing your order. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto bg-gradient-to-br from-purple-50 to-indigo-50 shadow-xl">
      <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-t-lg">
        <CardTitle className="text-2xl font-bold">Checkout</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">Full Name</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input placeholder="John Doe" {...field} className="pl-10 bg-white" />
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">Email</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input type="email" placeholder="john@example.com" {...field} className="pl-10 bg-white" />
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">Address</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input placeholder="123 Space Street" {...field} className="pl-10 bg-white" />
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex space-x-4">
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel className="text-sm font-medium text-gray-700">City</FormLabel>
                      <FormControl>
                        <Input placeholder="New York" {...field} className="bg-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="zipCode"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel className="text-sm font-medium text-gray-700">ZIP Code</FormLabel>
                      <FormControl>
                        <Input placeholder="12345" {...field} className="bg-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="cardNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">Card Number</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input placeholder="1234 5678 9012 3456" {...field} className="pl-10 bg-white" />
                        <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex space-x-4">
                <FormField
                  control={form.control}
                  name="expirationDate"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel className="text-sm font-medium text-gray-700">Expiration Date</FormLabel>
                      <FormControl>
                        <Input placeholder="MM/YY" {...field} className="bg-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="cvv"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel className="text-sm font-medium text-gray-700">CVV</FormLabel>
                      <FormControl>
                        <Input placeholder="123" {...field} className="bg-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
              Place Order
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}