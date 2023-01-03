import { User } from "../../domain/entities/user";
import { UsersRepository } from "../repositories/userRepository";

export class MySqlRepository implements UsersRepository {
  private users: User[] = [];

  async findByEmail(email: string): Promise<User> {
    const user = this.users.find((user) => user.email === email);
    return user;
  }

  async saveUser(user: User): Promise<void> {
    this.users.push(user);
  }
}
