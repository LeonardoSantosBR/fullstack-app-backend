//controllers
import { CreateUserController } from "./create-user-controller";

//caso de uso
import { CreateUserUseCase } from "./create-users-useCase";

//implementacao das implementacoes
import { MySqlRepository } from "../../implementations/mysql-repository";

//injeçao de dependencias dos usecases
const MySqlRepo = new MySqlRepository();
const createUserUsecase = new CreateUserUseCase(MySqlRepo);
const createUserController = new CreateUserController(createUserUsecase);

//exportaçao
export { createUserUsecase, createUserController };
