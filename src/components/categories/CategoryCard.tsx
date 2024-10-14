// components/categories/CategoryCard.tsx
import Link from 'next/link';

interface CategoryCardProps {
    title: string;
    imageUrl: string;
    slug: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, imageUrl, slug }) => {
    return (
        <Link href={`/categories/${slug}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="font-semibold text-lg">{title}</h3>
            </div>
        </Link>
    );
};

export default CategoryCard;
