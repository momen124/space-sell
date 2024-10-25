import { authMiddleware } from "../packages/middleware/middlewares/auth/authMiddleware";
import { roleGuardMiddleware } from "../packages/middleware/middlewares/auth/role-guard";
import type { TMiddlewareHandler } from "../packages/middleware/types/handler";

const middlewareOptions: IOptions = {
  paths: {
    publicPaths: ["/", '/listings', `/listings/details/*`, `/category/*`],
    authPaths: ["/auth/*", "/admin/auth/*"],
    userPaths: ["/profile", "/profile/*", "/cart", "/listings/create"],
    adminPaths: ["/admin/*"],
    notFoundPaths: ["/404"],
  },
};

const middlewaresConfig: TMiddlewareHandler[] = [
  authMiddleware,
  roleGuardMiddleware,
];

export { middlewareOptions, middlewaresConfig };
