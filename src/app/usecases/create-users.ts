import { User } from "../../domain/entities/user";

class CreateUser {
  create() {
    const user = User.create();
    return user;
  }
}
