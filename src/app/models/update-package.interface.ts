export interface UpdatePackage {
  _id: string;
  version: string;
  minHardwareVersion: string;
  fileName: string;
  size: number;
  comment: string | null;
  downloadURL: string;
  created: string | Date;
  updated: string | Date;
  mandatory: boolean;
  status: 'candidate' | 'released';
}
