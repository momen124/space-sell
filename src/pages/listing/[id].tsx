// pages/listings/[id].tsx

import RootLayout from "@/components/layout/RootLayout";
import ListingDescription from "@/components/listings/ListingDescription";
import ListingDetails from "@/components/listings/ListingDetails";
import ListingGallery from "@/components/listings/ListingGallery";
import RelatedListings from "@/components/listings/RelatedListings";
import {
  Listing,
  ListingDetailPageProps,
  RelatedListing,
} from "@/types/Listing";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps<
  ListingDetailPageProps
> = async ({ params }) => {
  const listingId = params?.id as string;
  const listing: Listing = {
    id: listingId,
    title: "MacBook Pro 14-inch",
    price: "$1,999",
    location: "San Francisco, CA",
    postDate: "3 days ago",
    seller: { name: "Jane Smith", avatar: "https://via.placeholder.com/80" },
    images: [
      "https://imgs.search.brave.com/lFjyk2yms0etnacLCFFBQfz77Gl56-duCdKEFe12q4c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/MzE2QXJ6TGVKMkwu/anBn",
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spacegray-gallery1-202110?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1632788573000",
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spacegray-gallery3-202110?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1632788573000",
    ],
    description:
      "The MacBook Pro 14-inch is equipped with the M1 Pro chip, offering exceptional performance and battery life for power users.",
    features: [
      "14-inch Liquid Retina XDR display",
      "Apple M1 Pro chip",
      "16GB RAM",
      "512GB SSD",
      "Thunderbolt 4 ports",
      "macOS Monterey",
      "Backlit Magic Keyboard",
    ],
  };

  const relatedListings: RelatedListing[] = [
    {
      id: "1",
      title: "iPhone 13",
      price: "$799",
      location: "Los Angeles, CA",
      imgSrc:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-select-2021?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1645572315917",
    },
    {
      id: "2",
      title: "Bose Portable Speaker",
      price: "$299",
      location: "New York, NY",
      imgSrc:
        "https://m.media-amazon.com/images/I/61n3e-DfZ+L._AC_SX425_.jpg",
    },
    {
      id: "3",
      title: "HP Spectre x360",
      price: "$1,299",
      location: "Chicago, IL",
      imgSrc:
        "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06205999.png",
    },
    {
      id: "4",
      title: "Samsung Galaxy Buds Pro",
      price: "$149",
      location: "Boston, MA",
      imgSrc:
        "https://images.samsung.com/is/image/samsung/p6pim/un/galaxy-buds-pro-sm-r190nzkamea/gallery/un-galaxy-buds-pro-r190-371449-sm-r190nzkamea-368762763?$650_519_PNG$",
    },
  ];

  return {
    props: {
      listing,
      relatedListings,
    },
  };
};

const ListingDetailPage: React.FC<ListingDetailPageProps> = ({
  listing,
  relatedListings,
}) => {
  return (
    <RootLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-2/3">
            <ListingGallery images={listing.images} />
            <ListingDescription
              description={listing.description}
              features={listing.features}
            />
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
    </RootLayout>
  );
};

export default ListingDetailPage;
