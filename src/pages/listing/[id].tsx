// pages/listings/[id].tsx

import ListingDescription from "@/components/listings/ListingDescription";
import ListingDetails from "@/components/listings/ListingDetails";
import ListingGallery from "@/components/listings/ListingGallery";
import RelatedListings from "@/components/listings/RelatedListings";
import { GetServerSideProps } from "next";

interface Listing {
  id: string;
  title: string;
  price: string;
  location: string;
  postDate: string;
  seller: {
    name: string;
    avatar: string;
  };
  images: string[];
  description: string;
  features: string[];
}

interface RelatedListing {
  id: string;
  title: string;
  price: string;
  location: string;
  imgSrc: string;
}

interface ListingDetailPageProps {
  listing: Listing;
  relatedListings: RelatedListing[];
}

export const getServerSideProps: GetServerSideProps<ListingDetailPageProps> = async ({ params }) => {
  const listingId = params?.id as string;
  const listing: Listing = {
    id: listingId,
    title: 'iPhone 12 Pro Max',
    price: '$999',
    location: 'New York, NY',
    postDate: '2 days ago',
    seller: { name: 'John Doe', avatar: '/path/to/avatar.jpg' },
    images: [
      'https://picsum.photos/800/600?random=1',
      'https://picsum.photos/800/600?random=2',
      'https://picsum.photos/800/600?random=3',
    ],
    description:
      'The iPhone 12 Pro Max is the largest iPhone in Apple’s 2020 lineup. It features a 6.7-inch Super Retina XDR OLED display...',
    features: [
      '6.7-inch Super Retina XDR OLED display',
      'A14 Bionic chip',
      '5G capable',
      'Pro camera system (12MP ultra wide, wide, and telephoto)',
      'LiDAR Scanner for improved AR experiences',
      'Face ID for secure authentication',
      'iOS 14',
    ],
  };

  const relatedListings: RelatedListing[] = [
    { id: '1', title: 'iPhone 11 Pro', price: '$699', location: 'Brooklyn, NY', imgSrc: 'https://picsum.photos/300/200?random=4' },
    { id: '2', title: 'Samsung Galaxy S21', price: '$799', location: 'Manhattan, NY', imgSrc: 'https://picsum.photos/300/200?random=5' },
    { id: '3', title: 'Google Pixel 5', price: '$649', location: 'Queens, NY', imgSrc: 'https://picsum.photos/300/200?random=6' },
  ];

  return {
    props: {
      listing,
      relatedListings,
    },
  };
};

const ListingDetailPage: React.FC<ListingDetailPageProps> = ({ listing, relatedListings }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="md:w-2/3">
          <ListingGallery images={listing.images} />
          <ListingDescription description={listing.description} features={listing.features} />
        </div>
        <ListingDetails
          title={listing.title}
          price={listing.price}
          location={listing.location}
          postDate={listing.postDate}
          seller={listing.seller}
        />
      </div>
      <RelatedListings listings={relatedListings} />
    </div>
  );
};

export default ListingDetailPage;
