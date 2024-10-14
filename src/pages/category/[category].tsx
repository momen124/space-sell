// pages/category/[category].tsx
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

interface CategoryPageProps {
  categoryName: string;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ categoryName }) => {
  const router = useRouter();

  // If the page is not generated yet, show a loading state
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{categoryName}</h1>
      <p className="text-lg">Showing products for the "{categoryName}" category.</p>
      {/* Add content specific to the category here */}
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

  return {
    props: {
      categoryName: categoryName.replace('-', ' '), // Format the name for display
    },
  };
};

export default CategoryPage;
