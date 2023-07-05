/*
  Warnings:

  - You are about to alter the column `situacao` on the `Cliente` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(2))` to `TinyInt`.
  - You are about to alter the column `situacao` on the `Operacao` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `TinyInt`.
  - You are about to alter the column `situacao` on the `Veiculo` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(1))` to `TinyInt`.

*/
-- AlterTable
ALTER TABLE `Cliente` MODIFY `situacao` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `Operacao` MODIFY `situacao` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `Veiculo` MODIFY `situacao` BOOLEAN NOT NULL DEFAULT true;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
