import { uuid } from "uuidv4";

export class User {
  public readonly id: string;
  public email: string;
  public nome: string;
  public cpf: string;
  public dataNascimento: Date;
  public telefone?: string;
  public celular: string;
  public senha: string;
  public confirmarSenha: string;

  constructor(props: Omit<User, "id">, id?: string) {
    Object.assign(this, props);
    if (!id) {
      this.id = uuid();
    }
  }
}
