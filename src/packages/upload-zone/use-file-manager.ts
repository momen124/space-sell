import { useState } from 'react';

import { type File, type Files } from './type';
import { cleanFileKey } from './utils';

function useFileManager({
  onRemove,
}: {
  onRemove: (files: Attachment[]) => void;
}) {
  const [files, setFiles] = useState<Files>({});

  const clearFiles = () => {
    setFiles({});
  };

  const removeFile = (name: string) => {
    const newAttachments = { ...files };
    delete newAttachments[name];

    setFiles({ ...newAttachments });
    const attachments = Object.values(newAttachments).map(file => ({
      key: file.key ?? '',
      name: file.name,
      type: file.type,
      size: file.size,
      localPath: file.path,
    }));
    onRemove(attachments);
  };

  const updateFile = (name: string, updatedFile: Partial<File>) => {
    // this shouldn't exist but typescript is complaining and just in case
    const notFound: File = {
      name: 'Unknown',
      size: 0,
      status: 'error',
      error: 'Unknown error',
      type: 'unknown' as any,
      path: '',
      raw: updatedFile?.raw as any,
    };
    setFiles(prev => ({
      ...prev,
      [name]: {
        ...(prev[name] || notFound),
        ...updatedFile,
        key: cleanFileKey(updatedFile.key ?? ''),
      },
    }));
  };

  return {
    files,
    setFiles,
    removeFile,
    updateFile,
    clearFiles,
  };
}

export default useFileManager;
