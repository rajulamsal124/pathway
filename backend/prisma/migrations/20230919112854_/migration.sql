/*
  Warnings:

  - Added the required column `ProviderDescription` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ProviderName` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ProviderUrl` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `course` ADD COLUMN `ProviderDescription` VARCHAR(191) NOT NULL,
    ADD COLUMN `ProviderName` VARCHAR(191) NOT NULL,
    ADD COLUMN `ProviderUrl` VARCHAR(191) NOT NULL;
