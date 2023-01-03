/*import { inMemoryUsersRepository } from "../../../tests/repositories/in-memory-repository";
import { CreateUser } from "./create-users-controller";

describe("Teste create user", () => {
  it("should be able to create a new user", async () => {
    const userRepository = new inMemoryUsersRepository();
    const sut = new CreateUser(userRepository);

    const student = {
      _id: "idleonardo",
      nome: "leonardo",
    };

    const response = await sut.create({
      _id: student._id,
      nome: student.nome,
    });

    expect(response).toBeTruthy();
  });
});
*/
