import { User } from "../../../models/user";

export interface IPostUsersRepository {
  getExample(): Promise<User[]>;
}
