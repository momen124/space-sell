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
import { Card, CardContent } from "@/components/ui/card"
import { toast } from "@/components/ui/use-toast"
import { CreditCard, Mail, MapPin, User } from 'lucide-react'

import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-2xl mx-auto shadow-2xl">
        <Header />
        <CardContent className="p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center text-lg">
                        <User className="w-5 h-5 mr-2" />
                        Full Name
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} className="rounded-md border-gray-300 shadow-sm" />
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
                      <FormLabel className="flex items-center text-lg">
                        <Mail className="w-5 h-5 mr-2" />
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john@example.com" {...field} className="rounded-md border-gray-300 shadow-sm" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center text-lg">
                        <MapPin className="w-5 h-5 mr-2" />
                        Address
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="123 Space Street" {...field} className="rounded-md border-gray-300 shadow-sm" />
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
                        <FormLabel className="text-lg">City</FormLabel>
                        <FormControl>
                          <Input placeholder="New York" {...field} className="rounded-md border-gray-300 shadow-sm" />
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
                        <FormLabel className="text-lg">ZIP Code</FormLabel>
                        <FormControl>
                          <Input placeholder="12345" {...field} className="rounded-md border-gray-300 shadow-sm" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <CreditCard className="w-5 h-5 mr-2" />
                  Payment Details
                </h3>
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="cardNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg">Card Number</FormLabel>
                        <FormControl>
                          <Input placeholder="1234 5678 9012 3456" {...field} className="rounded-md border-gray-300 shadow-sm" />
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
                          <FormLabel className="text-lg">Expiration Date</FormLabel>
                          <FormControl>
                            <Input placeholder="MM/YY" {...field} className="rounded-md border-gray-300 shadow-sm" />
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
                          <FormLabel className="text-lg">CVV</FormLabel>
                          <FormControl>
                            <Input placeholder="123" {...field} className="rounded-md border-gray-300 shadow-sm" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
                Place Order
              </Button>
            </form>
          </Form>
        </CardContent>
        <Footer />
      </Card>
    </div>
  )
}
