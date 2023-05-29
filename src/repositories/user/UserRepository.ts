import { UserModel } from "../../models/User/UserModel";
import { AbstractUserRepository } from "./AbstractUserRepository";
import prisma from "../../config/prismaDB";
import { User } from "@prisma/client";

export class UserRepositoryPG implements AbstractUserRepository {
  create(data: UserModel): Promise<User> {
    return prisma.user.create({ data });
  }

  getByEmail(email: string): Promise<User | null> {
    return prisma.user.findFirst({ where: { email } });
  }

  getById(id: string): Promise<User | null> {
    return prisma.user.findUnique({ where: { id } });
  }
}
