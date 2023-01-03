import { Router } from "express";
import { createUserController } from "../../app/usecases/create-user";

const router = Router();

router.post("/users", (request, response) => {
  return createUserController.handle(request, response);
});

router.get("/get", (request, response) => {
  return response.status(200).send("socorro");
});

export { router };
