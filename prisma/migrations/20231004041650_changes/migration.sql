/*
  Warnings:

  - A unique constraint covering the columns `[title,id]` on the table `Course` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Course_title_key";

-- CreateIndex
CREATE UNIQUE INDEX "Course_title_id_key" ON "Course"("title", "id");
