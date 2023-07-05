/*
  Warnings:

  - You are about to drop the `CLient` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `CLient`;

-- CreateTable
CREATE TABLE `Cliente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `CNPJ` INTEGER NOT NULL,
    `razaoSocial` VARCHAR(255) NOT NULL,
    `fantasia` VARCHAR(255) NOT NULL,
    `situacao` ENUM('ATIVA', 'NULA', 'INAPTA') NOT NULL DEFAULT 'ATIVA',

    UNIQUE INDEX `Cliente_CNPJ_key`(`CNPJ`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Operacao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NOT NULL,
    `situacao` ENUM('ATIVA', 'NULA', 'INAPTA') NOT NULL DEFAULT 'ATIVA',
    `clienteId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Veiculo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `placa` INTEGER NOT NULL,
    `tipo` VARCHAR(191) NOT NULL,
    `situacao` ENUM('ATIVA', 'NULA', 'INAPTA') NOT NULL DEFAULT 'ATIVA',
    `operacaoId` INTEGER NOT NULL,

    UNIQUE INDEX `Veiculo_placa_key`(`placa`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Operacao` ADD CONSTRAINT `Operacao_clienteId_fkey` FOREIGN KEY (`clienteId`) REFERENCES `Cliente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Veiculo` ADD CONSTRAINT `Veiculo_operacaoId_fkey` FOREIGN KEY (`operacaoId`) REFERENCES `Operacao`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
