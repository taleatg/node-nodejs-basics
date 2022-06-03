import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const file = path.join(__dirname, '/files/fileToWrite.txt');
  const stream = new fs.createWriteStream(file, {encoding: 'utf8'});

  process.stdin.on('data', data => {
    stream.write(data.toString());
  })
};

write();
