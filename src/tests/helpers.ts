import * as jwt from "jsonwebtoken";
import { User } from "@prisma/client";

//import { createUser, createSession } from "./factories";
import prisma from "../config/prismaDB";

export async function cleanDb() {
  /* await prisma.session.deleteMany({});
  await prisma.instituteCategory.deleteMany({});
  await prisma.category.deleteMany({});
  await prisma.responsible.deleteMany({});
  await prisma.address.deleteMany({});
  await prisma.city.deleteMany({});
  await prisma.zone.deleteMany({});
  await prisma.state.deleteMany({});
  await prisma.institute.deleteMany({}); */
  await prisma.user.deleteMany({});
}

/* export async function generateValidToken(user?: User) {
  const incomingUser = user || (await createUser());
  const token = jwt.sign({ userId: incomingUser.id }, process.env.JWT_SECRET);

  await createSession(token);

  return token;
} */
