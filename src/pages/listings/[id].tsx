import { GetServerSideProps } from 'next';
import { Button } from "@/components/ui/button";
import { notFound } from 'next/navigation';

type Listing = {
  id: string;
  title: string;
  price: number;
  description: string;
  seller: string;
  image: string;
};

// Simulated async data fetcher
async function getListing(id: string): Promise<Listing | null> {
  const listings = [
    { id: "1", title: "Spaceship X2000", price: 999999, description: "A state-of-the-art spaceship with warp drive capabilities.", seller: "Elon Musk", image: "/placeholder.svg?height=400&width=600" },
    { id: "2", title: "Moon Rover", price: 50000, description: "Explore the lunar surface with this robust moon rover.", seller: "NASA", image: "/placeholder.svg?height=400&width=600" },
  ];

  const listing = listings.find(l => l.id === id);
  return listing ? listing : null;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const listing = await getListing(params?.id as string);

  if (!listing) {
    return { notFound: true }; // Redirect to 404 if no listing found
  }

  return {
    props: {
      listing,
    },
  };
};

export default function ListingPage({ listing }: { listing: Listing }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img src={listing.image} alt={listing.title} className="w-full rounded-lg shadow-lg" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{listing.title}</h1>
          <p className="text-2xl font-bold text-green-600 mb-4">${listing.price.toLocaleString()}</p>
          <p className="text-gray-700 mb-4">{listing.description}</p>
          <p className="text-sm text-gray-500 mb-4">Seller: {listing.seller}</p>
          <Button className="w-full">Contact Seller</Button>
        </div>
      </div>
    </div>
  );
}
