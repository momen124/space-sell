// pages/listing/[id].tsx
import { GetServerSideProps } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ListingCard from '@/components/listings/ListingCard';

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
    return { notFound: true };
  }

  return {
    props: {
      listing,
    },
  };
}

export default function ListingPage({ listing }: { listing: Listing }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <ListingCard listing={listing} />
      </main>
      <Footer />
    </div>
  );
}
