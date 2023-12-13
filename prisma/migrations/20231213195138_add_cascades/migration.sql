-- DropForeignKey
ALTER TABLE "ExerciseSets" DROP CONSTRAINT "ExerciseSets_athletesId_fkey";

-- DropForeignKey
ALTER TABLE "ExerciseSets" DROP CONSTRAINT "ExerciseSets_exercisesId_fkey";

-- DropForeignKey
ALTER TABLE "ExerciseSets" DROP CONSTRAINT "ExerciseSets_trainingExecutionId_fkey";

-- DropForeignKey
ALTER TABLE "TrainingExecutions" DROP CONSTRAINT "TrainingExecutions_trainingId_fkey";

-- AddForeignKey
ALTER TABLE "TrainingExecutions" ADD CONSTRAINT "TrainingExecutions_trainingId_fkey" FOREIGN KEY ("trainingId") REFERENCES "Trainings"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerciseSets" ADD CONSTRAINT "ExerciseSets_athletesId_fkey" FOREIGN KEY ("athletesId") REFERENCES "Athletes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerciseSets" ADD CONSTRAINT "ExerciseSets_trainingExecutionId_fkey" FOREIGN KEY ("trainingExecutionId") REFERENCES "TrainingExecutions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerciseSets" ADD CONSTRAINT "ExerciseSets_exercisesId_fkey" FOREIGN KEY ("exercisesId") REFERENCES "Exercises"("id") ON DELETE CASCADE ON UPDATE CASCADE;
