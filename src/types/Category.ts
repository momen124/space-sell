export interface Category {
  id: string;
  name: string;
  description: string;
  isRootParent: boolean;
  parent: Category;
  children: Category[];
  isFeatured: boolean;
}

export interface CategoryCardProps {
  category: {
    name: string;
    icon: string;
    link: string;
  };
}
