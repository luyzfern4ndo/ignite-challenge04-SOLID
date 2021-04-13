import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepositories: IUsersRepository) {}

  execute({ name, email }: IRequest): User {
    const userAlreadyExists = this.usersRepositories.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const user = this.usersRepositories.create({ name, email });

    return user;
  }
}

export { CreateUserUseCase };
