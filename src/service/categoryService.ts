import { Queryable } from "@/utils/decorators/queryable.decorator";
import { Api } from "./api";

const mockCategories = [
  { id: 1, name: "Vehicles", description: "Cars, bikes, and all kinds of vehicles." },
  { id: 2, name: "Equipment", description: "Tools and gadgets for every purpose." },
  { id: 3, name: "Weapons", description: "Items used for protection or combat." },
  { id: 4, name: "Clothing", description: "Apparel for all genders and occasions." },
  { id: 5, name: "Electronics", description: "Devices like phones, tablets, and computers." },
];

class CategoryService extends Api {
  @Queryable("category", [])
  async getCategories() {
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return mockCategories;
    } catch (error) {
      throw error;
    }
  }

  async createCategory(categoryData: { name: string; description: string }) {
    try {
      // Simulate creating a new category
      const newCategory = { id: mockCategories.length + 1, ...categoryData };
      mockCategories.push(newCategory);
      return newCategory;
    } catch (error) {
      throw error;
    }
  }
}

const categoryService = new CategoryService();
export { categoryService, CategoryService };