'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

export default function Profile() {
  const { handleSubmit } = useForm()

  const onSubmit = () => {
    // Handle profile edit submission
    console.log('Edit profile')
  }

  return (
    <div className="bg-background font-sans">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Profile</h1>
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center md:items-start">
              <Image
                src="https://picsum.photos/200/200?random=profile"
                alt="User profile"
                width={128}
                height={128}
                className="rounded-full object-cover mb-4 md:mb-0 md:mr-6"
              />
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold mb-2">John Doe</h2>
                <p className="text-muted-foreground mb-2">New York, NY</p>
                <p className="text-foreground mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Button type="submit">Edit Profile</Button>
                </form>
              </div>
            </div>
          </CardContent>
        </Card>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">My Listings</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition duration-300">
                <Image
                  src={`https://picsum.photos/400/300?random=${index + 3}`}
                  alt={`Listing ${index}`}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <CardTitle className="text-lg mb-2">Listing Title {index}</CardTitle>
                  <p className="text-foreground font-bold">${(index * 100) + 99}</p>
                  <p className="text-sm text-muted-foreground mb-2">New York, NY</p>
                  <Link href={`/listing/${index + 3}`} className="text-primary hover:underline">
                    View Details
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}