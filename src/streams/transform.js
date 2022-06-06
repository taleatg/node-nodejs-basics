export const transform = async () => {
  process.stdin.on('data', data => {
    process.stdout.write(data.reverse().toString().trim() + '\n');
  })
};

transform();
