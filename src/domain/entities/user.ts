import { Entity } from "../../core/domain/entity";
import { UserProps } from "../../models/user.model";

export class User extends Entity<UserProps> {
  private constructor(props: UserProps, id?: string) {
    super(props, id);
  }
  static create(props: UserProps, id?: string){
    const user= new User(props)
    return user;
  }
}
