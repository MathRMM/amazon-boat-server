import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";

export function loadEnv() {
  const path = ".env." + process.env.NODE_ENV;

  const currentEnvs = dotenv.config({ path });
  dotenvExpand.expand(currentEnvs);
  console.log(process.env.TYPE);
}
