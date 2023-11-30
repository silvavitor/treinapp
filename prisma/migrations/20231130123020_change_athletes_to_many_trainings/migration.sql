/*
  Warnings:

  - You are about to drop the column `trainingId` on the `Athletes` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Athletes" DROP CONSTRAINT "Athletes_trainingId_fkey";

-- AlterTable
ALTER TABLE "Athletes" DROP COLUMN "trainingId";

-- CreateTable
CREATE TABLE "_AthletesToTrainings" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AthletesToTrainings_AB_unique" ON "_AthletesToTrainings"("A", "B");

-- CreateIndex
CREATE INDEX "_AthletesToTrainings_B_index" ON "_AthletesToTrainings"("B");

-- AddForeignKey
ALTER TABLE "_AthletesToTrainings" ADD CONSTRAINT "_AthletesToTrainings_A_fkey" FOREIGN KEY ("A") REFERENCES "Athletes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AthletesToTrainings" ADD CONSTRAINT "_AthletesToTrainings_B_fkey" FOREIGN KEY ("B") REFERENCES "Trainings"("id") ON DELETE CASCADE ON UPDATE CASCADE;
