-- DropForeignKey
ALTER TABLE "Exercises" DROP CONSTRAINT "Exercises_trainingId_fkey";

-- AddForeignKey
ALTER TABLE "Exercises" ADD CONSTRAINT "Exercises_trainingId_fkey" FOREIGN KEY ("trainingId") REFERENCES "Trainings"("id") ON DELETE CASCADE ON UPDATE CASCADE;
