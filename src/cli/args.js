export const parseArgs = () => {
  let result = '';
  const args = process.argv.slice(2);

  for (let i = 0; i < args.length; i++) {
    result += i + 2 >= args.length ? `${args[i]} is ${args[i + 1]}` : `${args[i]} is ${args[i + 1]}, `;
    i++;
  }

  console.log(result);
};

parseArgs();
