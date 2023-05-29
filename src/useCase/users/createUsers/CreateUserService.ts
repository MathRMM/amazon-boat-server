import { conflictError } from "../../../errors/conflict-error";
import { UserModel } from "../../../models/User/UserModel";
import { AbstractUserRepository } from "../../../repositories/user/AbstractUserRepository";

export class CreateUserService {
  constructor( private clientRepository: AbstractUserRepository) {}
  async execute(data: UserModel){
    const isEmailExist = await this.clientRepository.getByEmail(data.email)
    if( isEmailExist )throw conflictError("Esse conta já existe.")
    return this.clientRepository.create(data)
  }
}
