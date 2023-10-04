/*
  Warnings:

  - Made the column `title` on table `CourseCategory` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_courseCategoryId_fkey";

-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_decisionPointId_fkey";

-- AlterTable
ALTER TABLE "Course" ALTER COLUMN "providerName" DROP NOT NULL,
ALTER COLUMN "providerUrl" DROP NOT NULL,
ALTER COLUMN "providerDescription" DROP NOT NULL,
ALTER COLUMN "courseCategoryId" DROP NOT NULL,
ALTER COLUMN "decisionPointId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "CourseCategory" ALTER COLUMN "title" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_decisionPointId_fkey" FOREIGN KEY ("decisionPointId") REFERENCES "DecisionPoint"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_courseCategoryId_fkey" FOREIGN KEY ("courseCategoryId") REFERENCES "CourseCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;
