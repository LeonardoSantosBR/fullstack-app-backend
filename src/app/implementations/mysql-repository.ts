import { PrismaClient } from "@prisma/client";
import { User } from "../../domain/entities/user";
import { UsersRepository } from "../repositories/userRepository";
import { badRequest, serverError, sucess } from "../../helpers";

export class MySqlRepository implements UsersRepository {
  async verifyUser(email: string): Promise<any> {
    try {
      //const user = this.users.find((user) => user.email === email);
      //return sucess({ statusCode: 200, body: user });
    } catch (error) {
      return serverError(new Error(error));
    }
  }

  async saveUser(user: User): Promise<any> {
    const prisma = new PrismaClient();
    try {

      const usersCreated = await prisma.user.create({
        data: {
          id: user.id,
          nome: user.nome,
          email: user.email,
          cpf: user.cpf,
          telefone: user.telefone,
          celular: user.celular,
          dataNascimento: user.dataNascimento,
          senha: user.senha,
          confirmarSenha: user.confirmarSenha,
        },
      });

      await prisma.$disconnect();

      return sucess({ statusCode: 200, body: usersCreated });
      
    } catch (error) {
      return serverError(new Error(error));
    }
  }
}
