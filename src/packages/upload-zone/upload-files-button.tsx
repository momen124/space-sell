import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";
import { AlertCircleIcon, FileIcon } from "lucide-react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";
import { useDropzone } from "react-dropzone";
import { modals } from "../modals";
import { handleRejection } from "./handle-error-messages";
import { type Files } from "./type";
import UploadedFile from "./uploaded-file";
import useFileManager from "./use-file-manager";
import useUploadFiles from "./use-upload-files";
import { formatMaxSize, transformFile } from "./utils";

interface UploadButtonProps {
  onUploadEnd: (files: Attachment[]) => void;
  onRemove: (files: Attachment[]) => void;
  modelType: string;
  accept?: "docs" | "images" | "all";
  maxSizeInMb?: number;
  multiple?: boolean;
  classNames?: {
    wrapper?: string;
    button?: string;
    resetButton?: string;
  };
  id?: string;
  hideUploadedFiles?: boolean;
  as?: "button" | "icon";
  uploadedFilesPortal?: string;
}

const UploadButton = forwardRef<
  { clearFiles: () => void },
  UploadButtonProps
>(
  (
    {
      onUploadEnd,
      maxSizeInMb = 1,
      multiple = true,
      classNames,
      id,
      hideUploadedFiles = false,
      modelType,
      onRemove,
      as,
    },
    ref
  ) => {
    const resetRef = useRef<() => void>(null);
    const clearFile = () => {
      resetRef.current?.();
    };

    const {
      removeFile,
      setFiles,
      updateFile,
      files: uploadedFiles,
    } = useFileManager({
      onRemove: (attachments) => {
        clearFile();
        onRemove?.(attachments);
      },
    });

    const { isUploading, uploadFiles } = useUploadFiles({
      onUploadEnd,
      setFiles,
      updateFile,
      modelType,
    });

    const validateFiles = (file: File[]) => {
      const rejectedFiles: File[] = [];
      const acceptedFiles: File[] = [];
      file.forEach((f) => {
        if (f.size <= formatMaxSize(maxSizeInMb)) {
          acceptedFiles.push(f);
        } else {
          rejectedFiles.push(f);
        }
      });

      return { acceptedFiles, rejectedFiles };
    };

    const handleInvalidFiles = (rejectedFiles: File[]) => {
      const errors = handleRejection(
        rejectedFiles.map((file) => ({
          file,
          errors: [{ code: "file-too-large", message: "" }],
        }))
      );
      const messages = [...new Set(errors.map((error) => error.error))];
      modals.open({
        id: "upload-zone-error",
        children: (
          <ul>
            {messages.map((message) => (
              <li key={message} className="text-brand-danger text-sm font-medium">
                <AlertCircleIcon /> {message}
              </li>
            ))}
          </ul>
        ),
      });
    };

    const onDrop = useCallback(
      (acceptedFiles: File[], rejectedFiles: File[]) => {
        if (rejectedFiles.length > 0) {
          handleInvalidFiles(rejectedFiles);
        }

        const state = acceptedFiles.reduce((acc, file) => {
          acc[file.name] = transformFile(file);
          return acc;
        }, {} as Files);

        setFiles((prev) => (multiple ? { ...prev, ...state } : state));

        const filesToUpload = acceptedFiles.map(transformFile);
        uploadFiles(filesToUpload);
      },
      [multiple, setFiles, uploadFiles]
    );

    const { getRootProps, getInputProps } = useDropzone({
      onDrop: (files) => {
        const { acceptedFiles, rejectedFiles } = validateFiles(files);
        onDrop(acceptedFiles, rejectedFiles);
      },
      multiple,
    });

    useImperativeHandle(ref, () => ({
      clearFiles: () => {
        Object.values(uploadedFiles).forEach((f) => removeFile(f.name));
      },
    }));

    return (
      <div className="upload-container">
        <div
          {...getRootProps({
            className: cn("dropzone", classNames?.wrapper),
          })}
        >
          <input {...getInputProps()} id={id} />
          <div
            className={cn("flex items-center gap-4", classNames?.wrapper)}
          >
            {as === "icon" ? (
              <div className="icon-wrapper">
                <FileIcon />
              </div>
            ) : (
              <Button
                type="button"
                loading={isUploading}
                variant="outline"
                className={cn(
                  `w-[350px] ${classNames?.button} text-center flex-1`
                )}
              >
                Upload File
              </Button>
            )}
          </div>
        </div>

        {!hideUploadedFiles && Object.values(uploadedFiles).length > 0 && (
          <div>
            <h2 className="text-brand-accent-500 text-lg lg:text-xl xl:text-2xl">
              Uploaded Files
            </h2>
            <div>
              {Object.values(uploadedFiles).map((f) => (
                <UploadedFile
                  key={f.key || f.name}
                  {...f}
                  onRemove={removeFile}
                />
              ))}
              {Object.values(uploadedFiles).length === 0 && (
                <p className="text-sm text-muted">No files uploaded</p>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
);

UploadButton.displayName = "UploadButton";
export default UploadButton;
