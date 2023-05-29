import { EnrollmentRepositoryPG } from "../../../repositories/enrollment/EnrollmentRepository.ts";
import { CreateEnrollmentService } from "./CreateEnrollmentService";
import { CreateEnrollmentController } from "./CreateEnrollmentController";
import { UserRepositoryPG } from "../../../repositories/user/UserRepository";

const EnrollmentRepository = new EnrollmentRepositoryPG();
const clientRepository = new UserRepositoryPG();
const createEnrollmentService = new CreateEnrollmentService(
  EnrollmentRepository,
  clientRepository
);
export const createEnrollmentController = new CreateEnrollmentController(
  createEnrollmentService
);
