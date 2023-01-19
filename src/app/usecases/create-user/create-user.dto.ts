export interface createUserDTO {
  id?: string;
  email: string;
  nome: string;
  cpf: string;
  dataNascimento: string;
  telefone?: string;
  celular: string;
  senha: string;
  confirmarSenha: string;
}
