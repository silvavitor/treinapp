/*
  Warnings:

  - You are about to drop the `TrainingExecution` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ExerciseSets" DROP CONSTRAINT "ExerciseSets_trainingExecutionId_fkey";

-- DropForeignKey
ALTER TABLE "TrainingExecution" DROP CONSTRAINT "TrainingExecution_trainingId_fkey";

-- DropTable
DROP TABLE "TrainingExecution";

-- CreateTable
CREATE TABLE "TrainingExecutions" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "trainingId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TrainingExecutions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TrainingExecutions" ADD CONSTRAINT "TrainingExecutions_trainingId_fkey" FOREIGN KEY ("trainingId") REFERENCES "Trainings"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerciseSets" ADD CONSTRAINT "ExerciseSets_trainingExecutionId_fkey" FOREIGN KEY ("trainingExecutionId") REFERENCES "TrainingExecutions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
