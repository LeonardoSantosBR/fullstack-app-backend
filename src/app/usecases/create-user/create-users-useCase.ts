import { User } from "../../../domain/entities/user";
import { serverError, sucess } from "../../../helpers";

import { UsersRepository } from "../../repositories/userRepository";
import { createUserDTO } from "./create-user.dto";

export class CreateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async create(data: createUserDTO) {
    try {
      /*const userAlreadyExists = this.usersRepository.verifyUser(data.email);

      if (!userAlreadyExists || userAlreadyExists === undefined) {
        throw new Error("USUÁRIO INDEFINIDO");
      }*/

      const user = new User(data);
      
      await this.usersRepository.saveUser(user);

      return sucess(user);
    } catch (error: any) {
      return serverError(error);
    }
  }
}
