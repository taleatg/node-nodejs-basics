import { cpus } from 'os';
import { Worker } from 'worker_threads';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const performCalculations = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const file = path.join(__dirname, '/worker.js');
  const os = cpus();
  const result = [];

  const newWorker = (number) => new Promise((resolve, reject) => {
    const worker = new Worker(file, { workerData:  number + 10 });
    worker.on('message', message => {
      resolve({
        status: 'resolved',
        data:message,
      });
    });
    worker.on('error', message => {
      resolve({
        status: 'error',
        data: null,
      });
    });
  });

  os.map((value, index) => {
    result.push(newWorker(index))
  });

  return Promise.all(result);
};

console.log(await performCalculations());
