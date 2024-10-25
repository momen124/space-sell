import type { NextRequest } from "next/server";

import { middlewareOptions, middlewaresConfig } from "./config/middleware";
import MiddlewareManager from "./packages/middleware/core/manager";

const middlewareManager = new MiddlewareManager({
  middlewares: middlewaresConfig,
  // middlewares: [],
  options: middlewareOptions,
});

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  return middlewareManager.run(request);
}
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|images|favicon.ico|locales|media).*)",
    "/",
  ],
};
