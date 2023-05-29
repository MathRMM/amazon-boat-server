import { describe, it, expect } from "vitest";
import { EnrollmentModel } from "./EnrollmentModel";

describe("Model Enrollment", () => {
  it("should respond error when body is empty", () => {
    try {
      new EnrollmentModel({
        id: "",
        name: "",
        cpf: "",
        birthday: "",
        phone: "",
      });
    } catch (error) {
      expect(error.status).toBe(400);
      expect(error.message).toMatch("O nome é obrigatório");
      expect(error.message).toMatch("CPF inválido");
      expect(error.message).toMatch("Invalid date");
      expect(error.message).toMatch("Número de telefone inválido");
    }
  });

  it("should respond error when date of birth is below 18 years old", () => {
    try {
      new EnrollmentModel({
        id: "",
        name: "Jona",
        cpf: "366.418.768-70",
        birthday: "10-10-2010",
        phone: "9999999-9999",
      });
    } catch (error) {
      expect(error.status).toBe(400);
      expect(error.message).toMatch("Idade mínima para o cadastro é de 18 anos");
    }
  });
});
