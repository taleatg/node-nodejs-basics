import fs, { access, constants } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { readdir } from 'fs/promises';

export const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const file = path.join(__dirname, '/files');
  const filesCopy = path.join(__dirname, '/files_copy');

  access(file, constants.F_OK, (err) => {
    err
      ? console.error(new Error('FS operation failed'))
      : access(filesCopy, constants.F_OK, (err) => {
        err
          ? fs.mkdir(filesCopy, { recursive: true }, async (err) => {
            if (err) return err;
            const files = await readdir(file);

            for (const copyFile of files) {
              await fs.copyFile(`${file}/${copyFile}`, `${filesCopy}/${copyFile}`, (err) => {
                if (err) {
                  return err;
                }
              });
            }
            console.log('Done successfully!');
          })
          : console.error(new Error('FS operation failed'));
      })
  })
};

copy();
