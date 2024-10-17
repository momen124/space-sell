import { CategoryPageProps } from '@/types/Category';
import { Product } from '@/types/ProductSection';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';



const allProducts: Product[] = [
  { id: "1", title: "Phone A", price: "$300", imgSrc: "https://picsum.photos/200/300", category: "electronics", link: "/product/1" },
  { id: "2", title: "Desktop A", price: "$800", imgSrc: "https://picsum.photos/200/300", category: "electronics", link: "/product/2" },
  { id: "3", title: "SmartWatch A", price: "$150", imgSrc: "https://picsum.photos/200/300", category: "electronics", link: "/product/3" },
  { id: "4", title: "Car B", price: "$5000", imgSrc: "https://picsum.photos/200/300", category: "vehicles", link: "/product/4" },
  { id: "5", title: "Luxury Sofa", price: "$1000", imgSrc: "https://picsum.photos/200/300", category: "furniture", link: "/product/5" },
  { id: "6", title: "Family House", price: "$50000", imgSrc: "https://picsum.photos/200/300", category: "real-estate", link: "/product/6" },
];


const CategoryPage: React.FC<CategoryPageProps> = ({ categoryName, products }) => {
  const router = useRouter();

  // If the page is not generated yet, show a loading state
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <main className="container mx-auto px-4 py-8">
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
      )}
    </main>
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
