// components/categories/CategoryList.tsx
import CategoryCard from './CategoryCard';

const categories = [
    { title: 'Electronics', imageUrl: 'https://picsum.photos/400/300?random=1', slug: 'electronics' },
    { title: 'Furniture', imageUrl: 'https://picsum.photos/400/300?random=2', slug: 'furniture' },
    { title: 'Clothing', imageUrl: 'https://picsum.photos/400/300?random=3', slug: 'clothing' },
];

const CategoryList: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) => (
                <CategoryCard key={category.slug} title={category.title} imageUrl={category.imageUrl} slug={category.slug} />
            ))}
        </div>
    );
};

export default CategoryList;
