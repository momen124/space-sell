import { isAxiosError } from "axios";
import type { NextApiResponse } from "next";

export const handleAPIError = ({
  error,
  res,
}: {
  error: unknown;
  res: NextApiResponse;
}) => {
  if (isAxiosError(error)) {
    return res.status(error.response?.status || 500).json(error.response?.data);
  }

  return res.status(500).json({ message: "Internal Server Error" });
};
