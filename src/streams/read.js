import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const file = path.join(__dirname, '/files/fileToRead.txt');
  const stream = new fs.createReadStream(file, {encoding: 'utf8'});
  stream.pipe(process.stdout);
};

read();
