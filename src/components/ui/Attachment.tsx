import { type FC } from "react";
import type { ClassNameValue } from "tailwind-merge";

import { cn } from "@/utils/cn";
import { PdfIcon } from "@/packages/upload-zone/file-icons";
import Image from "next/image";
import { Button } from "./button";
import { DownloadIcon } from "lucide-react";

export const renderIcon = (
  fileType: FileTypes | UploadedAttachment["type"],
  fileSrc: string,
  name: string
) => {
  let icon: JSX.Element;
  switch (fileType) {
    case "pdf":
    case "application/pdf":
      icon = <PdfIcon />;
      break;
    case "image":
    case "image/jpeg":
    case "image/png":
      return (
        <Image
          src={fileSrc}
          alt={name}
          width={100}
          height={50}
          className="object-contain"
        />
      );
    default:
      return `Unsupported file type:: ${fileType}`;
  }

  return (
    <Button
      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary-main focus:ring-opacity-50"
      onClick={() => {}}
    >
      {icon}
    </Button>
  );
};
const Attachment: FC<{
  name: string;
  fileSrc: string;
  fileType: FileTypes | UploadedAttachment["type"];
  className?: ClassNameValue;
  textClassName?: ClassNameValue;
}> = ({ name, fileSrc, fileType, className, textClassName }) => {
  return (
    <div
      className={cn(
        " flex h-[64px] flex-row items-center justify-between gap-3 border border-solid border-brand-neutrals-6 p-4",
        {
          "cursor-default opacity-50": !fileSrc,
          "focus-within:border-brand-primary-main  hover:border-brand-primary-main":
            !!fileSrc,
        },
        className
      )}
    >
      <div className="flex items-center gap-4">
        <span className="flex h-10 w-fit items-center justify-center">
          {renderIcon(fileType, fileSrc, name)}
        </span>
        <p className={cn("w-[100px] md:w-full", textClassName)}>{name}</p>
      </div>
      <a
        href={fileSrc}
        download={name}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center p-1 outline-none transition-colors ease-linear hover:bg-gray-400 hover:text-white focus:bg-gray-400 focus:text-white focus:outline-none"
        aria-label="download attachment"
      >
        {fileSrc && <DownloadIcon />}
      </a>
    </div>
  );
};

export default Attachment;
