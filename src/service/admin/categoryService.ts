import { axiosInternal } from "@/config/axios";
import { CategoryFormData } from "@/pages/admin/categories";
import { Queryable } from "@/utils/decorators/queryable.decorator";
import { Api } from "../api";

class AdminCategoryService extends Api {
  @Queryable("admin", [])
  async getCategories() {
    try {
      const response = await axiosInternal.get("/admin/categories");
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async createCategory(categoryData: CategoryFormData) {
    try {
      const response = await axiosInternal.post(
        "/admin/categories",
        categoryData
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async updateCategory(id: string, categoryData: CategoryFormData) {
    try {
      const response = await axiosInternal.patch(
        `/admin/categories/${id}`,
        categoryData
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async deleteCategory(id: string) {
    try {
      const response = await axiosInternal.delete(`/admin/categories/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

const adminCategoryService = new AdminCategoryService();
export { adminCategoryService, AdminCategoryService };
