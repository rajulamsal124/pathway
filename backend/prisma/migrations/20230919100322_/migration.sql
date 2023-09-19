/*
  Warnings:

  - Added the required column `duration` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `level` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `course` ADD COLUMN `duration` VARCHAR(191) NOT NULL,
    ADD COLUMN `level` VARCHAR(191) NOT NULL;
