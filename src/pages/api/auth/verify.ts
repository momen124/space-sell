import type { NextApiRequest, NextApiResponse } from "next";

import { axiosExternal } from "@/config/axios";
import { handleAPIError } from "@/utils/api-error-handler";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { method } = req;
    switch (method) {
      case "POST": {
        const axios = axiosExternal({
          req,
          res,
        });
        const { data, status } = await axios.post("/auth/verify", {
          ...req.body,
        });
        return res.status(status).json(data);
      }
      default:
        res.setHeader("Allow", ["POST"]);
        return res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    return handleAPIError({ error, res });
  }
}
