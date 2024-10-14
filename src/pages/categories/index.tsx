// pages/categories/index.tsx
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import CategoryList from '../../components/categories/CategoryList';

const CategoriesPage = () => {
    return (
        <div>
            <Header />
            <main className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6">Categories</h1>
                <CategoryList />
            </main>
            <Footer />
        </div>
    );
};

export default CategoriesPage;
