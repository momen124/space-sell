import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/context/cart"; // Import the cart context
import useUser from "@/hooks/useUser";
import { modals } from "@/packages/modals";
import {
  PlusCircle,
  Rocket,
  Search,
  ShoppingCart,
  User
} from "lucide-react";
import Link from "next/link";
import Router from "next/router";
import { useState } from "react";

export function Header() {
  const { user } = useUser();
  const [searchQuery, setSearchQuery] = useState("");
  const { totalItems } = useCart(); // Use cart context to get total items

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <header className="border-b bg-white shadow-sm py-4">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Rocket className="h-6 w-6 text-blue-500" />
          <span className="text-xl font-bold ml-2">Space Sell</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-lg font-medium hover:underline">
            Home
          </Link>
          <Link
            href="/listings"
            className="text-lg font-medium hover:underline"
          >
            Shop
          </Link>
          {!user && (
            <Link
              href="/auth/login"
              className="text-lg font-medium hover:underline"
            >
              Login
            </Link>
          )}
        </nav>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="flex items-center space-x-2 ml-4"
        >
          <Input
            type="search"
            placeholder="What are you looking for?"
            className="pl-4 w-64 hidden lg:block"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            required
          />
          <button type="submit" className="p-2">
            <Search className="h-5 w-5 text-gray-600" />
          </button>
        </form>

        {/* Navigation and Profile Menu */}
        <nav className="flex items-center space-x-6">
          <Link href="/cart" passHref>
            <Button variant="ghost" className="p-2 relative">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
                  {totalItems}
                </span>
              )}
            </Button>
          </Link>
            <Button variant="ghost" className="p-2" onClick={()=>{
              modals.open({
                id: "create-listing",
                title: "Create Listing",
                subTitle: "Add your products to sell and find potential buyers.",
                primaryButtonAction() {
                  Router.push('/listings/create')
                },
                primaryButtonProps: {
                  children: "Add your product now!",
                }
              })
            }}>
              <PlusCircle className="h-5 w-5" />
            </Button>

          {/* Profile Link */}
          <Link href="/profile" passHref>
            <Avatar className="cursor-pointer bg-red-500">
              <AvatarImage
                src="/placeholder.svg?height=32&width=32"
                alt="User"
              />
              <AvatarFallback>
                <User className="h-4 w-4 text-white" />
              </AvatarFallback>
            </Avatar>
          </Link>
        </nav>
      </div>
    </header>
  );
}
