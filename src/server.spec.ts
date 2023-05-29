import { describe, it, expect, beforeAll } from "vitest";
import app, { init } from "./app";
import supertest from "supertest";

beforeAll(async () => {
  await init();
});

const server = supertest(app);

describe("GET /health", () => {
  it("it should 200 when server is running", async () => {
    const response = await server.get("/health");

    expect(response.status).toBe(200);
  });
});
