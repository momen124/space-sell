import type { NextURL } from "next/dist/server/web/next-url";
import { type NextRequest, NextResponse, URLPattern } from "next/server";

import type { TMiddlewareHandler } from "../types/handler";
import MiddlewareError from "./middleware-error";

type TConstructor = {
  middlewares: TMiddlewareHandler[];
  options: IOptions;
};

export default class MiddlewareManager {
  private middlewares: TMiddlewareHandler[];

  private options: IOptions;

  constructor({ middlewares, options }: TConstructor) {
    if (!options || !options.paths) {
      throw new Error("Options or options.paths is undefined");
    }

    this.middlewares = middlewares;
    this.options = options;
  }

  static serializePattern(pattern: string): string {
    // the URL Pattern will not catch the index route. example: /admin will not be caught by /admin/*
    const serializePattern = pattern.replace(/\/\*$/, "{/*}?");

    return serializePattern;
  }

  private isPathMatches(
    url: NextURL,
    pathsType: keyof IOptions["paths"]
  ): boolean {
    const patterns = this.options.paths[pathsType] || [];
    const isMatch = patterns.some((pattern) => {
      const urlPattern = new URLPattern({
        ...url,
        pathname: MiddlewareManager.serializePattern(pattern),
      });
      return urlPattern.test(url.href);
    });

    return isMatch;
  }

  public async run(request: NextRequest): Promise<NextResponse | void> {
    try {
      if (this.isPathMatches(request.nextUrl, "publicPaths")) {
        return NextResponse.next();
      }

      for await (const middleware of this.middlewares) {
        await middleware(request, {
          isPathMatches: this.isPathMatches.bind(this),
        });
      }
    } catch (error) {
      if (!(error instanceof MiddlewareError)) {
        throw error;
      }

      const url = new URL(error.redirectUrl);

      return NextResponse.redirect(url, {
        status: 307,
      });
    }
    return NextResponse.next();
  }
}
