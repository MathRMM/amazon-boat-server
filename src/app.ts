import express, { Express } from "express";
import cors from "cors";

import { loadEnv } from "./config";
import { userRouter } from "./router/user.routes";
import { enrollmentRouter } from "./router/enrollment.routes";
loadEnv();

const app = express();
app
  .use(cors())
  .use(express.json())
  .use("/api/user", userRouter)
  .use("/api/enrollment", enrollmentRouter)
  .get("/health", async (_req, res) => {res.send("ok!");});

export function init(): Promise<Express> {
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  /* await disconnectDB(); */
}

export default app;
