import { renderIcon } from "@/components/ui/Attachment";
import type { UploadedFileProps } from "../uploaded-file";
import { Spinner } from "@/components/ui/spinner";

const memeTypeToTypeExtension: Record<string, UploadedFileProps["type"]> = {
  "image/jpeg": "image",
  "image/png": "image",
  "image/gif": "image",
  "application/pdf": "pdf",
  "application/msword": "doc",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
    "doc",
  "application/vnd.ms-excel": "xls",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "xls",
};

export const needToTransformMemeTypeToTypeExtension = (type: string) => {
  return !!memeTypeToTypeExtension[type];
};
export const transformMemeTypeToTypeExtension = (type: string) => {
  const extension = memeTypeToTypeExtension[type];
  if (!extension) {
    throw new Error(`Unknown file type ${type}`);
  }
  return extension as UploadedFileProps["type"];
};

const getFileIcon = renderIcon;
const getStatusIcon = (status: UploadedFileProps["status"], error?: string) => {
  switch (status) {
    case "uploaded":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="stroke-brand-primary-400"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l5 5l10 -10" />
        </svg>
      );
    case "error":
      return <p className="text-sm text-red-700">{error}</p>;
    case "uploading":
      return <Spinner />;
    default:
      return <div>Unknown</div>;
  }
};

export { getFileIcon, getStatusIcon };
