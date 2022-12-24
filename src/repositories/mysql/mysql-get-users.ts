import { IGetUsersRepository } from "../../domain/interfaces/users-interface";
import { User } from "../../models/user";

export class MySqlGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [{ teste: "teste", teste2: "teste" }];
  }
}
