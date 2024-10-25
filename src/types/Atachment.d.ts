type FileTypes = 'pdf' | 'image' | 'doc' | 'xls';

type Attachment = {
  name: string;
  type: FileTypes;
  size: number;
  key: string;
  localPath?: string;
};

type UploadedAttachment = {
  name: string;
  type: 'application/pdf' | 'image/jpeg' | 'image/png';
  key: string;
  url: string;
};
