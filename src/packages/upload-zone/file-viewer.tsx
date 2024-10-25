import type { FC } from "react";

import { getFileIcon, transformMemeTypeToTypeExtension } from "./utils";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";

interface FileViewerProps {
  /**
   * @description Callback function to remove file from the list by url
   */
  onRemove?: (url: string) => void;
  file: Pick<UploadedAttachment, "url" | "name" | "type">;
}

const FileViewer: FC<FileViewerProps> = ({
  file: { url, name, type },
  onRemove,
}) => {
  return (
    <div className="flex w-full items-center justify-between gap-2  border border-solid border-[#BEBEC1] bg-[#FAFAFA] p-4">
      <div className="flex items-center justify-center gap-4">
        {getFileIcon(transformMemeTypeToTypeExtension(type), url, name)}
        <p className="max-w-[80px] overflow-hidden  text-ellipsis whitespace-nowrap text-sm font-semibold text-gray-700 sm:max-w-[200px]">
          {name}
        </p>
      </div>
      <div className="flex items-end justify-center gap-2">
        <DownloadIcon
          className="*: h-fit w-6
          cursor-pointer bg-gray-100
          p-0.5 text-gray-900
          hover:text-brand-primary-main 
          "
          onClick={() => {
            if (url) {
              const el = document.createElement("a");
              el.href = url;
              el.download = name;
              el.click();
            }
          }}
        />

        {onRemove && (
          <Button
            variant="ghost"
            className="bg-gray-100 text-gray-900
          hover:bg-gray-200 hover:text-gray-700"
            onClick={() => onRemove(name)}
            area-label="Remove"
          ></Button>
        )}
      </div>
    </div>
  );
};

export default FileViewer;
