export const parseEnv = () => {
  let result = '';

  for (const key in process.env) {
    if (key.includes('RSS_')) {
      result += `${key}=${process.env[key]}; `;
    }
  }

  console.log(result);
};

parseEnv();
