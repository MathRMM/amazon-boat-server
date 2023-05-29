import { UserRepositoryPG } from "../../../repositories/user/UserRepository";
import { CreateUserService } from "./CreateUserService";
import { CreateUserController } from "./CreateUserController";

const userRepository = new UserRepositoryPG();
const createUserService = new CreateUserService(userRepository);
export const createUserController = new CreateUserController(createUserService);
