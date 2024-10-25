import { axiosInternal } from "@/config/axios";
import { Queryable } from "@/utils/decorators/queryable.decorator";
import { Api } from "./api";

class CategoryService extends Api {
  @Queryable("user", [])
  async getCategories(options?: { isRootParent?: boolean }) {
    try {
      const filters = Object.entries(options ?? {}).reduce(
        (acc, [key, value]) => {
          acc[`filter[${key}]`] = value;
          return acc;
        },
        {} as Record<string, any>
      );

      const response = await axiosInternal.get("/categories", {
        params: { ...filters },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  @Queryable("user", [])
  async getCategoryDetails(id: string) {
    try {
      const response = await axiosInternal.get(`/categories/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

const categoryService = new CategoryService();
export { categoryService, CategoryService };
