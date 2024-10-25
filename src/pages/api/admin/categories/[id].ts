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
      case "PATCH": {
        const { data, status } = await axiosExternal({
          req,
          res,
        }).patch(`/admin/categories/${req.query.id}`, {
          ...req.body,
        });
        return res.status(status).json(data);
      }
      case "DELETE": {
        const { data, status } = await axiosExternal({
          req,
          res,
        }).delete(`/admin/categories/${req.query.id}`);
        return res.status(status).json(data);
      }
      default:
        res.setHeader("Allow", ["PATCH", "DELETE"]);
        return res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    return handleAPIError({ error, res });
  }
}
