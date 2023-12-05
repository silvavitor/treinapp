/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Trainings` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Trainings_name_key" ON "Trainings"("name");
