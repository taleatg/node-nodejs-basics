import child_process from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const spawnChildProcess = async (args) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const file = path.join(__dirname, '/files/script.js');
  const child = child_process.fork(file, args, { stdio: ['pipe', 'pipe', 'pipe', 'ipc'] });

  child.stderr.on('data', (data) => {
    console.error(`child process exited with stderr: ${data}`);
  });

  child.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });

  child.stdout.pipe(process.stdout);
  process.stdin.pipe(child.stdin);
}

spawnChildProcess(['Test1', 'Test2', 'Test3', 'Test4', 'Test5']);
