/*
  Warnings:

  - You are about to drop the `usuarios_cadastrados` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `usuarios_cadastrados`;

-- CreateTable
CREATE TABLE `User` (
    `email` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `dataNascimento` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `celular` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `confirmarSenha` VARCHAR(191) NOT NULL,
    `id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
