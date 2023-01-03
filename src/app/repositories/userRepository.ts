import { User } from "../../domain/entities/user";

export interface UsersRepository {
  findByEmail(email: string): Promise<User>;
  saveUser(user: User): Promise<void>;
}
