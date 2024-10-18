import AdvancedFilter from '@/components/common/Filter';
import ProductSection from '@/components/common/ProductSection';
import { listingService } from '@/service/listingService';
import { useEffect, useState } from 'react';
import RootLayout from '../../components/layout/RootLayout';

// Updated mock listings with electronics and furniture
const mockListings = [
  {
    id: "9",
    title: "Samsung Galaxy S21",
    price: "$799",
    location: "Manhattan, NY",
    imgSrc: "https://imgs.search.brave.com/b8jS5nnrFKJ8L7gdbqBWK0V9CdHy09oj_Fe9l_Gp1EE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/OTEtaW1nLmNvbS9n/YWxsZXJ5X2ltYWdl/c191cGxvYWRzL2Mv/Zi9jZmI3NTBiOWI0/OTUxNjRlMzQ0NDNj/YThlNTgyM2I1MWE0/YjQ2YTRlLmpwZz90/cj1oLTU1MCx3LTAs/Yy1hdF9tYXg",
    link: "/listing/9",
},
{
    id: "10",
    title: "Leather Sofa",
    price: "$499",
    location: "Brooklyn, NY",
    imgSrc: "https://imgs.search.brave.com/HqhDkMqsKcLPyiYobupW2xS4cEn51UlXqHVAqz8Scj0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jYi5z/Y2VuZTcuY29tL2lz/L2ltYWdlL0NyYXRl/L0JhcnJldHRJSUx0/aDEwM0dyZFNmQWxl/U09TU1MyNC8kd2Vi/X3BscF9jYXJkJC8y/NDAyMDExNDQ2MDMv/YmFycmV0dC1paS1s/ZWF0aGVyLXNvZmEt/MTAzLmpwZw",
    link: "/listing/10",
},
{
    id: "11",
    title: "Sony WH-1000XM4 Wireless Headphones",
    price: "$348",
    location: "Boston, MA",
    imgSrc: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg",
    link: "/listing/11",
},
{
    id: "12",
    title: "Apple MacBook Air M1",
    price: "$999",
    location: "Queens, NY",
    imgSrc: "https://imgs.search.brave.com/lFjyk2yms0etnacLCFFBQfz77Gl56-duCdKEFe12q4c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/MzE2QXJ6TGVKMkwu/anBn",
    link: "/listing/12",
},

{
  id: "5",
  title: "purfume",
  price: "$260",
  oldPrice: "$360",
  imgSrc: "https://imgs.search.brave.com/gJY3q2Ashc79rOu-Wt4u6b8mkraqKiYHpvVKIj29d10/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ3/NTAzMDczL3Bob3Rv/L3BlcmZ1bWUuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPTZv/VFAzZ3ZpM3R2Zjla/cWEtcWpyWi1Gc2lm/X0FvdlpJbjRfSVpz/cENMV2c9",
  link: "/product/5",
},
{
  id: "6",
  title: "Gucci Duffle Bag",
  price: "$960",
  oldPrice: "$1160",
  imgSrc: "https://imgs.search.brave.com/dMV3tF2Uq7bfe1xZEBrzXxNTU5Ues1vMOGS74eqOj8Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzIwNTg5OTkyL3Iv/aWwvMWY1MGE2LzQx/OTgwMzcxNzkvaWxf/NjAweDYwMC40MTk4/MDM3MTc5X2lzbzQu/anBn",
  link: "/product/6",
},

];
export default function ListingsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [sortOption, setSortOption] = useState('featured');
  const [listings, setListings] = useState(mockListings); // State to manage listings data

  // Fetch listings from an API or listing service
  useEffect(() => {
    const fetchListings = async () => {
      try {
        const data = await listingService.getListings(); // Replace with your actual data-fetching function
        setListings(data);
      } catch (error) {
        console.error("Error fetching listings:", error);
      }
    };

    // Uncomment the line below if you want to fetch from a service
    // fetchListings();
  }, []);

  const filteredListings = listings
    .filter(listing =>
      listing.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (category === 'all' || listing.category === category)
    )
    .sort((a, b) => {
      if (sortOption === 'price-low') return parseFloat(a.price) - parseFloat(b.price);
      if (sortOption === 'price-high') return parseFloat(b.price) - parseFloat(a.price);
      if (sortOption === 'title') return a.title.localeCompare(b.title);
      return 0; // Default sort: featured
    });

  return (
    <RootLayout>
      <main className="container mx-auto py-8 flex space-x-8">
        {/* Sidebar Filter Section */}
        <aside className="w-1/4">
          <h2 className="text-xl font-bold mb-4">Filter Results</h2>
          {/* Advanced Filter Section */}
          <AdvancedFilter
            category={category}
            setCategory={setCategory}
            setSortOption={setSortOption}
            onApplyFilters={() => {}}
          />
        </aside>

        {/* Listings Section */}
        <section className="w-3/4">
          <ProductSection
            title="All Listings"
            products={filteredListings.map(listing => ({
              id: listing.id,
              title: listing.title,
              price: `$${parseFloat(listing.price).toLocaleString()}`,
              imgSrc: listing.imgSrc,
              link: `/listing/${listing.id}`
            }))}
          />
        </section>
      </main>
    </RootLayout>
  );
}
