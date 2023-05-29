import { UserModel } from "../../models/User/UserModel";
import { User } from "@prisma/client";

export abstract class AbstractUserRepository {
  abstract create(data: UserModel): Promise<User>;
  abstract getByEmail(email: string): Promise<User | null>;
  abstract getById(string: string): Promise<User | null>;
}
