import { IGetUsersController, IGetUsersRepository, IGetExampleRepository } from "./protocols";

export class GetUsersController implements IGetUsersController {
  constructor(
    private readonly getUsersRepository: IGetUsersRepository,
    private readonly getEXRepository: IGetExampleRepository
  ) {}

  async handle() {
    try {
      const users = await this.getUsersRepository.getUsers();
      const example = await this.getEXRepository.getExample();

      return {
        statusCode: 200,
        body: users,
        example: example,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "deu errado",
      };
    }
  }
}
