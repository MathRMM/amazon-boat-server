import Jwt from "jsonwebtoken";

const privateKey = process.env.JWT_SECRET;
const expiresIn = "3h";

export class Tokens {
  static create(userId: string) {
    if (privateKey) {
      return Jwt.sign({ userId }, privateKey, { expiresIn });
    } else throw new Error("private key is undefined");
  }

  static read(token: string) {
    if (privateKey) {
      return Jwt.verify(token, privateKey);
    } else throw new Error("private key is undefined");
  }
}
