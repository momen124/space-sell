import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { UAParser } from "ua-parser-js";

import { env } from "./Env.mjs";

const axiosExternal = (config: {
  req: NextApiRequest;
  res: NextApiResponse;
}) => {
  const baseURL = `${env.BACKEND_URL}/api/v1`;
  const userAgent = config?.req.headers["user-agent"];
  const parser = new UAParser(userAgent);
  const ip =
    config?.req?.headers["x-forwarded-for"] ||
    config?.req?.socket?.remoteAddress;

  const instance = axios.create({
    baseURL,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      Cookie: `access_token=${config?.req.cookies?.access_token}`,
      "x-lang": config?.req.cookies.NEXT_LOCALE ?? "en",
      "user-agent": parser.getUA() ?? userAgent,
      "x-user-ip": ip,
    },
  });

  return instance;
};

const axiosInternal = axios.create({
  baseURL: `${env.NEXT_PUBLIC_FRONTEND_URL}/api`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export { axiosExternal, axiosInternal };
