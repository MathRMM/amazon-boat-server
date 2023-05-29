import { describe, it, expect } from "vitest";
import { UserModel } from "./UserModel";

describe("Model User", () => {
  it("should respond error when body is empty ", () => {
    try {
      new UserModel({
        email: "",
        password: "",
      });
    } catch (error) {
      expect(error.status).toBe(400);
      expect(error.message).toMatch("O email é obrigatório");
      expect(error.message).toMatch("Senha deve ter no mínimo 8 caracteres");
    }
  });

  it("should respond error when email is invalid", () => {
    try {
      new UserModel({
        email: "asdademail.com",
        password: "asdasdasd",
      });
    } catch (error) {
      expect(error.status).toBe(400);
      expect(error.message).toMatch("Endereço de email inválido");
    }
  });

  it("should respond error when password is above 45 character", () => {
    try {
      new UserModel({
        email: "asdad@email.com",
        password:
          "asdasadasdgjhkagdajhksgdajhgdajhgdajkhgdajhdghajsdgajhsdgasjhasdjhaskdjhaskjhdkjahsdkajh",
      });
    } catch (error) {
      expect(error.status).toBe(400);
      expect(error.message).toMatch("Senha deve ter no máximo 45 caracteres");
    }
  });

  it("should respond error when password does not contain uppercase, lowercase and number ", () => {
    try {
      new UserModel({
        email: "asdad@email.com",
        password: "asdasllajsdkajs",
      });
    } catch (error) {
      expect(error.status).toBe(400);
      expect(error.message).toMatch(
        "Senha deve conter letras maiúsculas, minúsculas e números"
      );
    }
  });

  it("should respond successful when body is valid", () => {
    const result = new UserModel({
      email: "asdad@email.com",
      password: "Asdasdasd1",
    });

    expect(result).toEqual({
      id: expect.any(String),
      email: "asdad@email.com",
      hashPassword: expect.any(String),
    });
  });
});
