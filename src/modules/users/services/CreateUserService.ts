import { IUsersRepositories } from "../repositories/IUsersRepositories";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserService {
  constructor(private usersRepositories: IUsersRepositories) {}

  execute({ name, email }: IRequest): void {
    const userAlreadyExists = this.usersRepositories.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    this.usersRepositories.create({ name, email });
  }
}

export { CreateUserService };
