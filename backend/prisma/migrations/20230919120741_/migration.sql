/*
  Warnings:

  - You are about to drop the column `ProviderDescription` on the `course` table. All the data in the column will be lost.
  - You are about to drop the column `ProviderName` on the `course` table. All the data in the column will be lost.
  - You are about to drop the column `ProviderUrl` on the `course` table. All the data in the column will be lost.
  - Added the required column `providerDescription` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `providerName` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `providerUrl` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rolesDescription` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rolesName` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `course` DROP COLUMN `ProviderDescription`,
    DROP COLUMN `ProviderName`,
    DROP COLUMN `ProviderUrl`,
    ADD COLUMN `providerDescription` VARCHAR(191) NOT NULL,
    ADD COLUMN `providerName` VARCHAR(191) NOT NULL,
    ADD COLUMN `providerUrl` VARCHAR(191) NOT NULL,
    ADD COLUMN `rolesDescription` VARCHAR(191) NOT NULL,
    ADD COLUMN `rolesName` VARCHAR(191) NOT NULL;
