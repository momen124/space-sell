import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useEffect, useState } from 'react'

type Listing = {
  id: string
  title: string
  seller: string
  price: number
  category: string
  status: 'active' | 'pending' | 'blocked'
}

const mockListings: Listing[] = [
  { id: '1', title: 'Vintage Rocket Booster', seller: 'RetroSpace Inc.', price: 15000, category: 'Vehicles', status: 'active' },
  { id: '2', title: 'Quantum Flux Capacitor', seller: 'FutureTech Ltd.', price: 50000, category: 'Equipment', status: 'pending' },
  { id: '3', title: 'Martian Soil Sample Kit', seller: 'Red Planet Research', price: 500, category: 'Resources', status: 'active' },
  { id: '4', title: 'Zero-G Coffee Maker', seller: 'Cosmic Caffeine Co.', price: 299, category: 'Equipment', status: 'blocked' },
]

export default function ListingManagementPage() {
  const [listings, setListings] = useState<Listing[]>([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    // In a real app, you would fetch listings from your API
    setListings(mockListings)
  }, [])

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const filteredListings = listings.filter(listing =>
    listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    listing.seller.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleStatusChange = (listingId: string, newStatus: 'active' | 'pending' | 'blocked') => {
    setListings(listings.map(listing =>
      listing.id === listingId ? { ...listing, status: newStatus } : listing
    ))
  }

  const handleDeleteListing = (listingId: string) => {
    setListings(listings.filter(listing => listing.id !== listingId))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Listing Management</h1>
      <div className="mb-4">
        <Input
          type="text"
          placeholder="Search listings..."
          value={searchTerm}
          onChange={handleSearch}
          className="max-w-sm"
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Seller</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredListings.map((listing) => (
            <TableRow key={listing.id}>
              <TableCell>{listing.title}</TableCell>
              <TableCell>{listing.seller}</TableCell>
              <TableCell>${listing.price.toLocaleString()}</TableCell>
              <TableCell>{listing.category}</TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  listing.status === 'active' ? 'bg-green-200 text-green-800' :
                  listing.status === 'pending' ? 'bg-yellow-200 text-yellow-800' :
                  'bg-red-200 text-red-800'
                }`}>
                  {listing.status}
                </span>
              </TableCell>
              <TableCell>
                <div className="space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleStatusChange(listing.id, 'active')}
                    disabled={listing.status === 'active'}
                  >
                    Activate
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleStatusChange(listing.id, 'blocked')}
                    disabled={listing.status === 'blocked'}
                  >
                    Block
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDeleteListing(listing.id)}
                  >
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}