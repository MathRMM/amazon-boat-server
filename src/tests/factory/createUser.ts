import { UserModel } from "../../models/User/UserModel";
import { UserRepositoryPG } from "../../repositories/user/UserRepository";
import { faker } from "@faker-js/faker";

export async function createUserFactory() {
  const user = {
    id: faker.string.uuid(),
    email: faker.internet.email(),
    password: generatePassword(),
  };
  const repository = new UserRepositoryPG();
  try {
    await repository.create(new UserModel(user));
    return user;
  } catch (error) {
    throw new Error("Status: " + 500);
  }
}

export function generatePassword() {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  let password = faker.internet.password();

  while (!regex.test(password)) {
    password = faker.internet.password();
  }

  return password;
}