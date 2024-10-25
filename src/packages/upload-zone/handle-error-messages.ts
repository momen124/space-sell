import { getFileType } from "./utils";

enum ErrorCode {
  FileInvalidType = "file-invalid-type",
  FileTooLarge = "file-too-large",
  FileTooSmall = "file-too-small",
  TooManyFiles = "too-many-files",
}

type ErrorMap = Record<ErrorCode, string>;

const errorMap: ErrorMap = {
  "file-invalid-type": "FileInvalidType",
  "file-too-large": "FileTooLarge",
  "file-too-small": "FileTooSmall",
  "too-many-files": "TooManyFiles",
};

const extractFileTypes = (error: string): string[] => {
  const mimeTypes = error.split("must be")[1];
  if (mimeTypes?.includes(",")) {
    return mimeTypes.split(",").map((type) => getFileType(type.trim()));
  }

  return mimeTypes ? [getFileType(mimeTypes.trim())] : ["unknown"];
};

export const handleRejection = (rejectedFiles: any[]) => {
  const errorMessages: {
    fileName: string;
    fileType: string;
    error: string;
  }[] = [];

  rejectedFiles.forEach((rejectedFile) => {
    rejectedFile.errors.forEach((error: any) => {
      const extractedFileTypes = extractFileTypes(error.message);

      const allowedFileTypes = new Set(extractedFileTypes);

      allowedFileTypes.delete("unknown" as any); // to remove unknown type

      errorMessages.push({
        error: errorMap[error.code as ErrorCode],
        fileName: rejectedFile.file.name,
        fileType: getFileType(rejectedFile.file.type),
      });
    });
  });

  return errorMessages;
};
