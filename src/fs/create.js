import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const file = path.join(__dirname, '/files/fresh.txt');

  fs.open(file, 'wx', (err) => {
    if (err) {
      if (err.code === 'EEXIST') {
        console.error(new Error('FS operation failed'));
      }
    }

    fs.writeFile(file, 'I am fresh and young', (err) => {
      err ? new Error(err) : console.log('Done successfully!');
    });
  });
};

create();
