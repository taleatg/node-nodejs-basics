import fs, { access, constants } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const rename = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const file = path.join(__dirname, '/files/wrongFilename.txt');
  const fileRename = path.join(__dirname, '/files/properFilename.md');

  access(file, constants.F_OK, (err) => {
    err
      ? console.error(new Error('FS operation failed'))
      : access(fileRename, constants.F_OK, (err) => {
        err
          ? fs.rename(file, fileRename, (err) => {
            err ? new Error(err) : console.log('Done successfully!');
          })
          : console.error(new Error('FS operation failed'));
      })
  })
};

rename();
