export interface createUserDTO {
  email: string;
  nome: string;
  cpf: string;
  dataNascimento: Date;
  telefone?: string;
  celular: string;
  senha: string;
  confirmarSenha: string;
}
