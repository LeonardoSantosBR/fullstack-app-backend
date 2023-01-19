import { User } from "../../domain/entities/user";

export interface UsersRepository {
  verifyUser(email: string): Promise<User>;
  saveUser(user: User): Promise<void>;
}
