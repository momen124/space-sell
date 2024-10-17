// src/pages/profile/edit.tsx

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import RootLayout from "../layout";

const formSchema = z
  .object({
    firstName: z.string().min(1, {
      message: "First name is required.",
    }),
    lastName: z.string().min(1, {
      message: "Last name is required.",
    }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    address: z.string().min(1, {
      message: "Address is required.",
    }),
    currentPassword: z.string().optional(),
    newPassword: z
      .string()
      .min(8, {
        message: "Password must be at least 8 characters.",
      })
      .optional(),
    confirmNewPassword: z.string().optional(),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Passwords don't match",
    path: ["confirmNewPassword"],
  });

const ProfileEditPage: React.FC = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  function onSubmit(values: any) {
    console.log(values);
  }

  return (
    <RootLayout>
      <div className="container mx-auto px-4 py-8 flex">
        {/* Sidebar Navigation */}
        <aside className="w-1/4 pr-8">
          <nav className="flex flex-col space-y-4">
            <h3 className="font-bold text-lg">Manage My Account</h3>
            <Link href="/profile/edit" className="text-red-500">
              My Profile
            </Link>
            <Link href="/AddressBook" className="text-gray-700 hover:text-red-500">
              Address Book
            </Link>
            <Link href="/PaymentOptions" className="text-gray-700 hover:text-red-500">
              My Payment Options
            </Link>

            <h3 className="font-bold text-lg mt-4">My Orders</h3>
            <Link href="/MyReturns" className="text-gray-700 hover:text-red-500">
              My Returns
            </Link>
            <Link href="/MyCancellations" className="text-gray-700 hover:text-red-500">
              My Cancellations
            </Link>

            <h3 className="font-bold text-lg mt-4">My Wishlist</h3>
            <Link href="/wishlist/WishlistPage" className="text-gray-700 hover:text-red-500">
              My WishList
            </Link>
          </nav>
        </aside>

        {/* Profile Edit Form */}
        <main className="w-3/4 p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-6 text-red-500">Edit Your Profile</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your first name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your last name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Enter your email" {...field} disabled />
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
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password Change Section */}
              <div className="border-t pt-6 mt-6">
                <h3 className="text-xl font-semibold mb-4">Password Changes</h3>
                <FormField
                  control={form.control}
                  name="currentPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="Enter current password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="newPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>New Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="Enter new password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmNewPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm New Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="Confirm new password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Form Buttons */}
              <div className="flex justify-end space-x-4">
                <Button type="button" variant="outline" className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">
                  Cancel
                </Button>
                <Button type="submit" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                  Save Changes
                </Button>
              </div>
            </form>
          </Form>
        </main>
      </div>
    </RootLayout>
  );
};

export default ProfileEditPage;
