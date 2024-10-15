import { Queryable } from "@/utils/decorators/queryable.decorator";
import { Api } from "./api";

const mockUsers = [
  { id: "1", name: "Alice Johnson", email: "alice@example.com", age: 28, role: "admin" },
  { id: "2", name: "Bob Smith", email: "bob@example.com", age: 35, role: "user" },
  { id: "3", name: "Charlie Brown", email: "charlie@example.com", age: 22, role: "user" },
  { id: "4", name: "Diana Prince", email: "diana@example.com", age: 30, role: "moderator" },
];

class UserService extends Api {
  @Queryable("user", [])
  async getUserById(userId: string) {
    try {
      // Simulate fetching user by ID from mock data
      const user = mockUsers.find((user) => user.id === userId);
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    } catch (error) {
      throw error;
    }
  }

  async createUser(userData: object) {
    try {
      // Simulate creating a new user
      const newUser = { id: (mockUsers.length + 1).toString(), ...userData };
      mockUsers.push(newUser);
      return newUser;
    } catch (error) {
      throw error;
    }
  }
}

const userService = new UserService();
export { userService, UserService };