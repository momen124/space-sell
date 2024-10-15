// components/ListingCard.tsx
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Phone, User } from 'lucide-react';

type Listing = {
  id: string;
  title: string;
  price: number;
  description: string;
  seller: string;
  image: string;
};

const ListingCard = ({ listing }: { listing: Listing }) => {
  return (
    <Card className="overflow-hidden rounded-lg shadow-xl bg-white">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
        <CardTitle className="text-3xl font-bold flex justify-between items-center">
          {listing.title}
          <span className="text-sm font-normal">ID: {listing.id}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image 
              src={listing.image} 
              alt={listing.title} 
              layout="fill" 
              objectFit="cover" 
              className="hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Details Section */}
          <div className="space-y-6">
            <p className="text-3xl font-bold text-green-600">${listing.price.toLocaleString()}</p>
            <p className="text-gray-700 text-lg">{listing.description}</p>
            <p className="text-sm text-gray-500 flex items-center">
              <User className="w-5 h-5 mr-2 text-blue-600" />
              Seller: {listing.seller}
            </p>
            <div className="flex space-x-4 mt-4">
              <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              <Button variant="outline" className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                <Phone className="w-5 h-5 mr-2" />
                Contact Seller
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ListingCard;
