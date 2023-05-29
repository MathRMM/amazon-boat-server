export class UserLoginDTO {
  email: string;
  password: string;

  constructor({ email, password }: UserLoginDTO) {
    this.email = email;
    this.password = password;
  }
}
