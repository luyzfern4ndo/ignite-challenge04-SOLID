import { User } from "../model/User";
import { IUsersRepositories, ICreateUserDTO } from "./IUsersRepositories";

class UsersRepositories implements IUsersRepositories {
  private users: User[];

  constructor() {
    this.users = [];
  }

  create({ name, email }: ICreateUserDTO): void {
    const user = new User();

    Object.assign(user, {
      name,
      email,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.users.push(user);
  }

  list(): User[] {
    return this.users;
  }

  findByEmail(email: string): User {
    const user = this.users.find((user) => user.email === email);

    return user;
  }
}

export { UsersRepositories };
