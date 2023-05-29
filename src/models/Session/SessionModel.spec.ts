import { describe, it, expect } from "vitest";
import { SessionModel } from "./SessionModel";
import { UserModel } from "../User/UserModel";

const user = new UserModel({
  email: "asdad@email.com",
  password: "Asdasdasd1",
});

describe("Model Session", () => {
  it("should respond error when body is empty ", () => {
    try {
      new SessionModel({
        userId: "",
      });
    } catch (error) {
      expect(error.status).toBe(400);
    }
  });

  it("should respond error when body is invalid ", () => {
    try {
      new SessionModel({
        userId: "45615fhfgh-fhfg65f4h-fghfgh5f-gh",
      });
    } catch (error) {
      expect(error.status).toBe(400);
    }
  });
});
