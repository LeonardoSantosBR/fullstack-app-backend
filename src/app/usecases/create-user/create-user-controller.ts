import { Request, Response } from "express";
import { createUserDTO } from "./create-user.dto";
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
      }: createUserDTO = request.body.values;

      const reqValue = request.body.values;

      let camposVazios = 0;
      for (const key in reqValue) {
        // eslint-disable-next-line no-prototype-builtins
        if (reqValue[key].length == 0) {
          camposVazios++;
        }
      }

      if (camposVazios > 0) {
        return response
          .status(500)
          .send(`existem ${camposVazios} campos que estão vazios.`);
      }

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

      return response.status(201).send(request.body.values);
    } catch (error) {
      return response.status(400).json({
        message: error.message || "erro inesperado",
      });
    }
  }
}
