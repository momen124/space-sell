import type { RegisterSchemaType } from "@/schema/registerSchema";
import { Queryable } from "@/utils/decorators/queryable.decorator";
import { Api } from "./api";

class AuthService extends Api {
  constructor() {
    super();
  }

  @Queryable("user", [])
  async login(email: string, password: string) {
    try {
      const response = await this.api.post("/auth/login", { email, password });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async verify(payload: RegisterSchemaType) {
    try {
      await this.api.post("/auth/verify", payload);
      return payload;
    } catch (error) {
      throw error;
    }
  }

  @Queryable("user", [])
  async register(payload: RegisterSchemaType) {
    try {
      const response = await this.api.post("/auth/register", payload);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

const authService = new AuthService();
export { authService, AuthService };
