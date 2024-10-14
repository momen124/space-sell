// pages/categories/[category].tsx
import { useRouter } from 'next/router';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const CategoryPage = () => {
    const router = useRouter();
    const { category } = router.query;

    return (
        <div>
            <Header />
            <main className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6">{category}</h1>
                {/* Add logic to fetch and display listings for the selected category */}
                <p>Displaying listings for category: {category}</p>
            </main>
            <Footer />
        </div>
    );
};

export default CategoryPage;
