import { axiosExternal } from "@/config/axios";
import { isAxiosError } from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export interface AwsSignedUrlResponse {
  url: string;
  fields: {
    "content-type": string;
    bucket: string;
    "X-Amz-Algorithm": string;
    "X-Amz-Credential": string;
    "X-Amz-Date": string;
    key: string;
    Policy: string;
    "X-Amz-Signature": string;
  };
}
export type GcsSignedUrlResponse = {
  url: string;
  fields: {
    key: string;
    "x-goog-date": string;
    "x-goog-credential": string;
    "x-goog-algorithm": string;
    policy: string;
    "x-goog-signature": string;
    "Content-Type": string;
  };
};

export type SignedUrlResponse = AwsSignedUrlResponse | GcsSignedUrlResponse;

export type APIResponseSignedUrl = APIResponse<SignedUrlResponse>;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  try {
    switch (method) {
      case "POST": {
        const { modelType, fileName, mimeType, sizeInBytes } = req.body as {
          modelType: string;
          fileName: string;
          mimeType: string;
          sizeInBytes: string;
        };

        // Handle Post request
        const { data } = await axiosExternal({
          req,
          res,
        }).post<APIResponseSignedUrl>("/media/pre-signed-url", {
          modelType,
          fileName,
          mimeType,
          sizeInBytes: parseInt(sizeInBytes, 10),
        });
        res.status(200).json(data);
        break;
      }

      default:
        res.setHeader("Allow", ["Post"]);
        res.status(405).end(`Method method Not Allowed`);
    }
  } catch (error) {
    if (isAxiosError(error)) {
      res.status(error.response?.status || 500).json(error.response?.data);
      return;
    }
    res.status(500).json({ message: "Internal Server Error" });
  }
}
