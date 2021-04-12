import { Router } from "express";

import { UsersRepositories } from "../modules/users/repositories/UsersRepositories";

const usersRoutes = Router();
const usersRepositories = new UsersRepositories();

usersRoutes.post("/", (request, response) => {
  const { name, email } = request.body;

  const userAlreadyExists = usersRepositories.findByEmail(email);

  if (userAlreadyExists) {
    return response.status(401).json({ error: "User already exists" });
  }

  usersRepositories.create({ name, email });

  return response.status(201).send();
});

usersRoutes.get("/", (request, response) => {
  const users = usersRepositories.list();

  return response.json(users);
});

export { usersRoutes };
