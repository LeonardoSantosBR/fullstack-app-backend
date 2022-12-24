import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http";
import { IGetUsersRepository } from "../../../domain/interfaces/users-interface";

export class GetUsersController implements Controller {
  constructor(private readonly getUsersRepository: IGetUsersRepository) {}

  async handle(): Promise<HttpResponse> {
    try {
      const users = await this.getUsersRepository.getUsers();
      return {
        statusCode: 200,
        body: users,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "deu errado",
      };
    }
  }
}
