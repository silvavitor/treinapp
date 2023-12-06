import { Module } from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { ExercisesController } from './exercises.controller';
import { ExerciseRepository } from './repositories/exercises.repository';
import { PrismaExercisesRepository } from './repositories/prisma-exercises.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ExercisesController],
  providers: [
    ExercisesService,
    PrismaService,
    {
      provide: ExerciseRepository,
      useClass: PrismaExercisesRepository,
    },
  ],
})
export class ExercisesModule {}
