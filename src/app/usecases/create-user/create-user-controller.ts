import { Request, Response } from "express";
import { CreateUserUseCase } from "./create-users-useCase";

export class CreateUserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const {
        email,
        nome,
        cpf,
        dataNascimento,
        telefone,
        celular,
        senha,
        confirmarSenha,
      } = request.body;

      await this.createUserUseCase.create({
        email,
        nome,
        cpf,
        dataNascimento,
        telefone,
        celular,
        senha,
        confirmarSenha,
      });

      return response.status(201).send(request.body);
    } catch (error) {
      return response.status(400).json({
        message: error.message || "erro inesperado",
      });
    }
  }
}
