import { LoginSchemaType } from "@/schema/loginSchema";
import type { RegisterSchemaType } from "@/schema/registerSchema";
import { Queryable } from "@/utils/decorators/queryable.decorator";
import { signIn } from "next-auth/react";
import { Api } from "./api";
import { axiosInternal } from "@/config/axios";
import { UserType } from "@/types/user";

class AuthService extends Api {
  constructor() {
    super();
  }

  async login(values: LoginSchemaType & { userType?: UserType }) {
    const response = await signIn("credentials", {
      username: values.email,
      password: values.password,
      userType: values.userType,
      redirect: false,
    });

    if (response?.error) {
      const errorResponse = {
        ...response,
        message: response.error,
      };
      return Promise.reject(errorResponse);
    }

    return response;
  }

  async verify(payload: RegisterSchemaType) {
    try {
      await axiosInternal.post("/auth/verify", payload);
      return payload;
    } catch (error) {
      throw error;
    }
  }

  @Queryable("user", [])
  async register(payload: RegisterSchemaType) {
    try {
      const response = await axiosInternal.post("/auth/register", payload);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

const authService = new AuthService();
export { authService, AuthService };
