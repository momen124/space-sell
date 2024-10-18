import { CategoryPageProps } from '@/types/Category';
import { Product } from '@/types/ProductSection';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import RootLayout from '../../components/layout/RootLayout';



const allProducts: Product[] = [
  {
    id: "8",
    title: "Lenovo",
    price: "$999",
    oldPrice: "$1200",
    imgSrc: "https://imgs.search.brave.com/KJ9OEj43DOZo7LUCiOf8459f7pWfhFSlxiEgXuw4tC8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9waXNj/ZXMuYmJ5c3RhdGlj/LmNvbS9pbWFnZTIv/QmVzdEJ1eV9VUy9p/bWFnZXMvcHJvZHVj/dHMvNjU0OS82NTQ5/NzE3X3NkLmpwZztt/YXhIZWlnaHQ9MTUw/O21heFdpZHRoPTMw/MDtmb3JtYXQ9d2Vi/cA",
    link: "/product/8",
    category: "electronics", // Added category field
  },
  {
    id: "9",
    title: "Samsung Galaxy S21",
    price: "$799",
    location: "Manhattan, NY",
    imgSrc: "https://imgs.search.brave.com/b8jS5nnrFKJ8L7gdbqBWK0V9CdHy09oj_Fe9l_Gp1EE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/OTEtaW1nLmNvbS9n/YWxsZXJ5X2ltYWdl/c191cGxvYWRzL2Mv/Zi9jZmI3NTBiOWI0/OTUxNjRlMzQ0NDNj/YThlNTgyM2I1MWE0/YjQ2YTRlLmpwZz90/cj1oLTU1MCx3LTAs/Yy1hdF9tYXg",
    link: "/listing/9",
    category: "electronics", // Added category field
  },
  {
    id: "11",
    title: "Sony WH-1000XM4 Wireless Headphones",
    price: "$348",
    location: "Boston, MA",
    imgSrc: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg",
    link: "/listing/11",
    category: "electronics", // Added category field
  },
];



const CategoryPage: React.FC<CategoryPageProps> = ({ categoryName, products }) => {
  const router = useRouter();

  // If the page is not generated yet, show a loading state
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
      <RootLayout> 
      <div className="flex-1">
      <h1 className="text-4xl font-bold mb-4">{categoryName}</h1>
      <p className="text-lg mb-6">Showing products for the "{categoryName}" category.</p>
      
      {/* Display filtered products */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg p-4">
              <a href={product.link}>
                <img src={product.imgSrc} alt={product.title} className="w-full h-40 object-cover mb-4" />
                <h4 className="text-xl font-semibold">{product.title}</h4>
                <p className="text-lg font-bold text-red-500">{product.price}</p>
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p>No products found for this category.</p>
      )}</div>
      </RootLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Define available categories for pre-rendering
  const categories = ['electronics', 'vehicles', 'furniture', 'real-estate'];

  const paths = categories.map((category) => ({
    params: { category },
  }));

  return { paths, fallback: true }; // `true` enables incremental static generation for other categories
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const categoryName = params?.category as string;

  // Filter products based on the selected category
  const filteredProducts = allProducts.filter((product) =>
    product.category === categoryName
  );

  return {
    props: {
      categoryName: categoryName.replace('-', ' '), // Format the name for display
      products: filteredProducts, // Pass filtered products as a prop
    },
  };
};

export default CategoryPage;
