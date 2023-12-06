/*
  Warnings:

  - Made the column `trainingId` on table `Exercises` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Exercises" DROP CONSTRAINT "Exercises_trainingId_fkey";

-- AlterTable
ALTER TABLE "Exercises" ALTER COLUMN "trainingId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Exercises" ADD CONSTRAINT "Exercises_trainingId_fkey" FOREIGN KEY ("trainingId") REFERENCES "Trainings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
