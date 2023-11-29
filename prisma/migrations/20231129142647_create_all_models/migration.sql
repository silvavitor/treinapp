/*
  Warnings:

  - You are about to drop the `Training` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Training";

-- CreateTable
CREATE TABLE "Trainings" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Trainings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exercises" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sets_qtd" INTEGER NOT NULL,
    "trainingId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Exercises_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Athletes" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "trainingId" TEXT,

    CONSTRAINT "Athletes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TrainingExecution" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "trainingId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TrainingExecution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExerciseSets" (
    "id" TEXT NOT NULL,
    "setNumber" INTEGER NOT NULL,
    "reps" DECIMAL(65,30) NOT NULL,
    "weight" INTEGER NOT NULL,
    "athletesId" TEXT NOT NULL,
    "exercisesId" TEXT NOT NULL,
    "trainingExecutionId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ExerciseSets_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Exercises" ADD CONSTRAINT "Exercises_trainingId_fkey" FOREIGN KEY ("trainingId") REFERENCES "Trainings"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Athletes" ADD CONSTRAINT "Athletes_trainingId_fkey" FOREIGN KEY ("trainingId") REFERENCES "Trainings"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrainingExecution" ADD CONSTRAINT "TrainingExecution_trainingId_fkey" FOREIGN KEY ("trainingId") REFERENCES "Trainings"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerciseSets" ADD CONSTRAINT "ExerciseSets_athletesId_fkey" FOREIGN KEY ("athletesId") REFERENCES "Athletes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerciseSets" ADD CONSTRAINT "ExerciseSets_trainingExecutionId_fkey" FOREIGN KEY ("trainingExecutionId") REFERENCES "TrainingExecution"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerciseSets" ADD CONSTRAINT "ExerciseSets_exercisesId_fkey" FOREIGN KEY ("exercisesId") REFERENCES "Exercises"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
