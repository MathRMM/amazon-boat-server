import { EnrollmentModel } from "../../../models/Enrollment/EnrollmentModel";
import { AbstractEnrollmentRepository } from "../../../repositories/enrollment/AbstractEnrollmentRepository";
import { AbstractUserRepository } from "../../../repositories/user/AbstractUserRepository";

export class CreateEnrollmentService {
  constructor(
    private abstractEnrollmentRepository: AbstractEnrollmentRepository,
    private abstractClientRepository: AbstractUserRepository
  ) {}

  async execute(data: EnrollmentModel) {
    return this.abstractEnrollmentRepository.create(data);
  }
}
