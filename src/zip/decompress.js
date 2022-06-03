import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const decompress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const file = path.join(__dirname, '/files');

  const unzip = zlib.createUnzip();
  const input = fs.createReadStream(`${file}/archive.gz`);
  const output = fs.createWriteStream(`${file}/fileToDecompress.txt`);
  
  input.pipe(unzip).pipe(output);
};

decompress();
