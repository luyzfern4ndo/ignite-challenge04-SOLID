import { User } from "../model/User";

interface ICreateUserDTO {
  name: string;
  email: string;
}

interface IUsersRepositories {
  findByEmail(email: string): User;
  list(): User[];
  create({ name, email }: ICreateUserDTO): void;
}

export { IUsersRepositories, ICreateUserDTO };
