import { Request, Response } from "express";
import { CreateUserUseCase } from "./create-users-useCase";

export class CreateUserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, email, password } = request.body;
      
      await this.createUserUseCase.create({
        name,
        email,
        password
      });

      return response.status(201).send("deu bom");
    } catch (error) {
      return response.status(400).json({
        message: error.message || "erro inesperado",
      });
    }
  }
}
