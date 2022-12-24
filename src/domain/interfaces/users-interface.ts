import { User } from "../../models/user";

export interface IGetUsersRepository {
  getUsers(): Promise<User[]>;
}
export interface IPostUsersRepository {
  postUsers(): Promise<User[]>;
}
