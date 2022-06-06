import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const remove = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const file = path.join(__dirname, '/files/fileToRemove.txt');

  fs.open(file, 'r', (err) => {
    if (err) {
      if (err.code === 'ENOENT') {
        console.error(new Error('FS operation failed'));
      }
    }

    fs.unlink(file, (err) => {
      err ? new Error(err) : console.log('Done successfully!');
    });
  })
};

remove();
