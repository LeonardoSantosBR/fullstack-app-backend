import { User } from "../../models/user";
import { Data } from "../../models/data";
import { HttpResponse } from "../protocols";

export interface IGetUsersController {
  handle(): Promise<HttpResponse<User[]>>;
}
export interface IGetUsersRepository {
  getUsers(): Promise<User[]>;
}
export interface IGetExampleRepository{
  getExample(): Promise<Data[]>
}