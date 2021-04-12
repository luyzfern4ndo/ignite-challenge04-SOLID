import { Router } from "express";

import { UsersRepositories } from "../modules/users/repositories/UsersRepositories";
import { CreateUserService } from "../modules/users/services/CreateUserService";

const usersRoutes = Router();
const usersRepositories = new UsersRepositories();

usersRoutes.post("/", (request, response) => {
  const { name, email } = request.body;

  const createUserService = new CreateUserService(usersRepositories);

  createUserService.execute({ name, email });

  return response.status(201).send();
});

usersRoutes.get("/", (request, response) => {
  const users = usersRepositories.list();

  return response.json(users);
});

export { usersRoutes };
