export class EnrollmentDTO {
  name: string;
  cpf: string;
  birthday: Date;
  phone: string;
  userId: string;

  constructor({ name, cpf, birthday, phone, userId }: EnrollmentDTO) {
    this.name = name;
    this.cpf = cpf;
    this.birthday = birthday
    this.phone = phone,
    this.userId = userId
  }
}
