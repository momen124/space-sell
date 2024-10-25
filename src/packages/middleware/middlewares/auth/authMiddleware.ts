import type { JWT } from "next-auth/jwt";
import { getToken } from "next-auth/jwt";

import { env } from "@/config/Env.mjs";
import MiddlewareError from "../../core/middleware-error";
import type { TMiddlewareHandler } from "../../types/handler";

const authMiddleware: TMiddlewareHandler = async (
  request,
  { isPathMatches }
) => {
  const user = (await getToken({ req: request })) as any as JWT;
  const allowedPaths =
    isPathMatches(request.nextUrl, "publicPaths") ||
    isPathMatches(request.nextUrl, "authPaths");

  if (user && allowedPaths) {
    throw new MiddlewareError(`${env.NEXT_PUBLIC_FRONTEND_URL}`);
  }
  const authPath = request.nextUrl.pathname.startsWith("/admin")
    ? "/admin/auth/login"
    : "/auth/login";
  if (!user && !allowedPaths) {
    throw new MiddlewareError(
      `${env.NEXT_PUBLIC_FRONTEND_URL}${authPath}`,
      "Auth Error: You are not allowed to access this page."
    );
  }
  return true;
};

export { authMiddleware };
