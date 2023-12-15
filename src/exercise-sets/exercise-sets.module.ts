import { Module } from '@nestjs/common';
import { ExerciseSetsService } from './exercise-sets.service';
import { ExerciseSetsController } from './exercise-sets.controller';
import { ExerciseSetsRepository } from './repositories/exercise-sets.repository';
import { PrismaExerciseSetsRepository } from './repositories/prisma-exercise-sets.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ExerciseSetsController],
  providers: [
    ExerciseSetsService,
    PrismaService,
    {
      provide: ExerciseSetsRepository,
      useClass: PrismaExerciseSetsRepository,
    },
  ],
})
export class ExerciseSetsModule {}
