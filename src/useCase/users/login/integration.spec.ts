import { describe, it, expect, beforeAll } from "vitest";
import supertest from "supertest";
import app, { init } from "../../../app";
import { cleanDb } from "../../../tests/helpers";
import { faker } from "@faker-js/faker";
import httpStatus from "http-status";
import { createUserFactory } from "../../../tests/factory/createUser";

beforeAll(async () => {
  await init();
  await cleanDb();
});

const server = supertest(app);

describe("Route /api/user/sign-in", () => {
    it("should respond 201 when user is login", async ()=> {
      const createClient = await createUserFactory()
      const response = await server.post("/api/user/sign-in").send(createClient)
      expect(response.status).toBe(httpStatus.CREATED)
    })
})