import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const file = path.join(__dirname, '/files');

  const gzip = zlib.createGzip();
  const input = fs.createReadStream(`${file}/fileToCompress.txt`);
  const output = fs.createWriteStream(`${file}/archive.gz`);

  input.pipe(gzip).pipe(output);
};

compress();
