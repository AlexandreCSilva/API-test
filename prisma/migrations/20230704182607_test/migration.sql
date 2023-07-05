/*
  Warnings:

  - You are about to alter the column `CNPJ` on the `Cliente` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- AlterTable
ALTER TABLE `Cliente` MODIFY `CNPJ` INTEGER NOT NULL;
