import React from 'react';
import Header from '../components/layout/Header';
import RelatedListings from '../components/listings/RelatedListings';
import Footer from '../components/layout/Footer';
import ListingGallery from '../components/listings/ListingGallery';
import ListingDetails from '../components/listings/ListingDetails';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Define a schema for form validation using Zod
const inquirySchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  message: z.string().min(10, 'Message should be at least 10 characters'),
});

// Define the types for the inquiry form
type InquiryFormValues = z.infer<typeof inquirySchema>;

const ListingPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<InquiryFormValues>({
    resolver: zodResolver(inquirySchema),
  });

  // Handle form submission
  const onSubmit = (data: InquiryFormValues) => {
    console.log(data);
    // Handle the form submission, e.g., send data to your server
  };

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Image Gallery */}
            <ListingGallery />
            {/* Listing Details */}
            <ListingDetails />
          </div>
          <div className="p-6 border-t">
            <h2 className="text-2xl font-semibold mb-4">Description</h2>
            <p className="text-gray-700 mb-4">
              The iPhone 12 Pro Max is the largest iPhone in Apple's 2020 lineup...
            </p>
            {/* Inquiry Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
              <h3 className="text-xl font-semibold mb-2">Inquire about this listing</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Your Name"
                  {...register('name')}
                  className="p-2 border rounded-md"
                />
                {errors.name && <span className="text-red-500">{errors.name.message}</span>}

                <Input
                  placeholder="Your Email"
                  {...register('email')}
                  className="p-2 border rounded-md"
                />
                {errors.email && <span className="text-red-500">{errors.email.message}</span>}
              </div>
              <textarea
                placeholder="Your Message"
                {...register('message')}
                className="w-full mt-4 p-2 border rounded-md"
                rows={4}
              />
              {errors.message && <span className="text-red-500">{errors.message.message}</span>}
              <Button type="submit" className="mt-4 w-full">Send Inquiry</Button>
            </form>
          </div>
        </div>

        {/* Related Listings */}
        <RelatedListings />
      </main>
      <Footer />
    </>
  );
};

export default ListingPage;
