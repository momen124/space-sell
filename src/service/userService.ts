import { Queryable } from "@/utils/decorators/queryable.decorator";
import { Api } from "./api";

class UserService extends Api {
  @Queryable("user", [])
  async getUserById(userId: string) {
    try {
      const response = await this.api.get(`/users/${userId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async createUser(userData: object) {
    try {
      const response = await this.api.post("/users", userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

const userService = new UserService();
export { userService, UserService };
