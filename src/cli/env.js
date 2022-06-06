export const parseEnv = () => {
  let result = '';

  for (const key in process.env) {
    if (key.includes('RSS_')) {
      result += result === '' ? `${key}=${process.env[key]}` : ` ; ${key}=${process.env[key]}`;
    }
  }

  console.log(result);
};

parseEnv();
