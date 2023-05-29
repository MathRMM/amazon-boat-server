import { describe, it, expect, beforeAll } from "vitest";
import supertest from "supertest";
import app, { init } from "../../../app";
import { cleanDb } from "../../../tests/helpers";
import { faker } from "@faker-js/faker";
import httpStatus from "http-status";
import { generatePassword } from "../../../tests/factory/createUser";

beforeAll(async () => {
  await init();
  await cleanDb();
});

const server = supertest(app);

describe("Route /api/user/sign-up", () => {
  it("should respond 201 when user is valid", async () => {
    const user = generateUser(true);
    const response = await server.post("/api/user/sign-up").send(user);

    expect(response.status).toBe(httpStatus.CREATED);
  });

  it("should respond 400 when user is invalid", async () => {
    const invalidUser = generateUser(false);
    const response = await server.post("/api/user/sign-up").send(invalidUser);

    expect(response.status).toBe(httpStatus.BAD_REQUEST);
  });
});

function generateUser(valid: boolean) {
  return valid
    ? {
        email: faker.internet.email(),
        password: generatePassword()
      }
    : {
        email: faker.internet.email(),
        password: faker.internet.password({
          length: 5,
        }),
      };
}
