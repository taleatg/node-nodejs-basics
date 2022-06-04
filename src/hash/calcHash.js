import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const file = path.join(__dirname, '/files/fileToCalculateHashFor.txt');

  fs.readFile(file,  'utf8', (err, data) => {
    if (err) {
      return err;
    } else {
      const hash = crypto.createHash('sha256');
      const hex = hash.update(data).digest('hex');
      console.log(hex);
    }
  })
};

calculateHash();
