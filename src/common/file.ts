import fs from 'fs';
import path from 'path';

export const createFolder = (folderName: string, basePath: string) => {
  const fullPath = path.join(basePath, folderName);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath);
  }
};

export const openFolder = () => {};
