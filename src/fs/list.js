import fs, { access, constants } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { readdir } from 'fs/promises';

export const list = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const file = path.join(__dirname, '/files');

  access(file, constants.F_OK, async (err) => {
    if (err) {
      return console.error(new Error('FS operation failed'));
    } else {
      const files = await readdir(file);

      const result = [];
      for (const fileName of files) {
        result.push(fileName);
      }
      console.log(result);
    }
  })
};

list();
