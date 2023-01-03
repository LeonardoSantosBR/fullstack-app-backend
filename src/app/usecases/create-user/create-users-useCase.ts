import { User } from "../../../domain/entities/user";
import { UsersRepository } from "../../repositories/userRepository";
import { createUserDTO } from "./create-user.dto";

export class CreateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async create(data: createUserDTO) {
    const userAlreadyExists= this.usersRepository.findByEmail(data.email)

    if(!userAlreadyExists || userAlreadyExists === undefined){
      throw new Error("USUÁRIO INDEFINIDO")
    }

    const user= new User(data)

    console.log(user)

    await this.usersRepository.saveUser(user)
  }
}
