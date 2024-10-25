import { FileWithPath } from "react-dropzone/.";

export interface File extends Omit<Attachment, "key"> {
  key?: string;
  status: "uploaded" | "error" | "uploading";
  error?: string;
  path: string;
  raw: FileWithPath;
}

// file name is unique
export type Files = Record<string, File>;

const ALLOWED_IMAGE_MIME_TYPES = ["image/png", "image/jpeg"];

export const ALLOWED_MIME_TYPES = {
  images: ALLOWED_IMAGE_MIME_TYPES,
};
