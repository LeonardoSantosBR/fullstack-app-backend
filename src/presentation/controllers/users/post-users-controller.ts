import { Controller } from "../../protocols/controller";
import { IPostUsersRepository } from "../../../domain/interfaces/users-interface";

export class PostUsersControllers implements Controller {
  constructor(private readonly postUsersRepository: IPostUsersRepository) {}

  async handle() {
    try {
      const users = await this.postUsersRepository.getExample();
      return {
        statusCode: 200,
        body: users,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: error,
      };
    }
  }
}
