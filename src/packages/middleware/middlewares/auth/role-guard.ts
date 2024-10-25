import type { JWT } from "next-auth/jwt";
import { getToken } from "next-auth/jwt";

import { env } from "@/config/Env.mjs";
import { UserType } from "@/types/user";
import MiddlewareError from "../../core/middleware-error";
import type { TMiddlewareHandler } from "../../types/handler";

const roleGuardMiddleware: TMiddlewareHandler = async (
  request,
  { isPathMatches }
) => {
  const user = (await getToken({
    req: request,
    secret: env.NEXTAUTH_SECRET,
  })) as any as JWT;

  const path: Record<UserType, keyof IOptions["paths"]> = {
    admin: "adminPaths",
    user: "userPaths",
  };
  const allowedPaths =
    isPathMatches(request.nextUrl, path[user?.type]) ||
    isPathMatches(request.nextUrl, "publicPaths") ||
    isPathMatches(request.nextUrl, "authPaths") ||
    isPathMatches(request.nextUrl, "notFoundPaths");

  if (!allowedPaths) {
    const userSegments = request?.nextUrl?.pathname?.split("/")?.[1];
    const url = ["admin", "user"].includes(userSegments)
      ? `${env.NEXT_PUBLIC_FRONTEND_URL}/${
          user?.type === "admin" ? "admin/dashboard" : ""
        }`
      : `${env.NEXT_PUBLIC_FRONTEND_URL}`;
    throw new MiddlewareError(
      url,
      "Role Guard Error: You are not allowed to access this page."
    );
  }

  return true;
};

export { roleGuardMiddleware };
