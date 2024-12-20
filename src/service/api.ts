/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosInternal } from "@/config/axios";
import { env } from "@/config/Env.mjs";
import { QueryUserType } from "@/utils/decorators/queryable.decorator";
import { AxiosInstance } from "axios";

type ApiConfig = {
  baseUrl?: string;
};

const DEFAULT_CONFIG = {
  baseUrl: env.NEXT_PUBLIC_FRONTEND_URL,
};

class Api {
  api: AxiosInstance;
  config: ApiConfig;

  constructor(config: ApiConfig = DEFAULT_CONFIG) {
    this.config = config;
    this.api = axiosInternal;
  }

  getQueryOptions<T extends keyof this, M extends (...args: any[]) => any>(
    methodName: Exclude<T, "getQueryOptions" | "api" | "config">,
    ...args: Parameters<this[T] extends M ? this[T] : never>
  ) {
    const method = this[methodName];

    if (typeof method !== "function") {
      throw new Error(`Method "${String(methodName)}()" is not a function`);
    }

    const metadata = this.getQueryableMetadata(methodName);

    return {
      // Generate query key based on method name and args
      queryKey: [metadata.userType, methodName, ...args] as [
        QueryUserType,
        T,
        ...Parameters<this[T] extends M ? this[T] : never>
      ],
      queryFn: () =>
        method.apply(this, args) as ReturnType<
          this[T] extends M ? this[T] : never
        >,
    };
  }

  private getQueryableMetadata(methodName: keyof this) {
    const method = this[methodName];

    // Check if the Queryable decorator was applied
    const metadata = (method as any)?.__metadata;

    if (!metadata) {
      throw new Error(
        `Method "${String(methodName)}()" is missing the Queryable decorator`
      );
    }
    if (!metadata.queryKey || !metadata.userType) {
      throw new Error(
        `Queryable decorator for method "${String(
          methodName
        )}()" is missing required args`
      );
    }
    return metadata;
  }
}

const api = new Api();

export { api, Api };
