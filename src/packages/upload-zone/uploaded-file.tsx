
import type { FC } from 'react';

import { cn } from '@/utils/cn';

import { Button } from '@/components/ui/button';
import { DownloadIcon } from 'lucide-react';
import type { File } from './type';
import { getFileIcon, getStatusIcon } from './utils';

export interface UploadedFileProps extends File {
  status: 'uploaded' | 'error' | 'uploading';
  onRemove: (key: string) => void;
  error?: string;
}

const UploadedFile: FC<UploadedFileProps> = ({
  name,
  status,
  type,
  onRemove,
  error,
  path,
}) => {
  return (
    <div
      className={cn(
        {
          'border-[#F9A8A8] bg-[#FDE8E8]': status === 'error',
        },
        'overflow-hidden flex h-[64px] flex-row items-center justify-between gap-3 border border-solid border-brand-neutrals-6 p-4',
        {
          'focus-within:border-brand-primary-main  hover:border-brand-primary-main':
            !!path,
        },
      )}
    >
      <div className="flex items-center justify-center gap-6">
        {getFileIcon(type, path, name)}
        <p className="max-w-[80px] overflow-hidden  text-ellipsis whitespace-nowrap text-sm font-semibold text-gray-700 sm:max-w-[200px]">
          {name}
        </p>

        <div className="mx-4">{getStatusIcon(status, error)}</div>
      </div>
      <div className="flex items-center justify-center gap-2">
        <DownloadIcon
          className=" w-6
          cursor-pointer bg-gray-100
          p-0.5 text-gray-900
          hover:text-brand-primary-main 
          "
          onClick={() => {
            const el = document.createElement('a');
            el.href = path;
            el.download = name;
            el.click();
          }}
        />

        <Button
        variant="ghost"
          className="bg-gray-100 text-gray-900
          hover:bg-gray-200 hover:text-gray-700"
          onClick={() => onRemove(name)}
          area-label="Remove"
        >X</Button>
      </div>
    </div>
  );
};

export default UploadedFile;
