import { Module } from '@nestjs/common';
import { TrainingsService } from './trainings.service';
import { TrainingsController } from './trainings.controller';
import { TrainingRepository } from './repositories/trainings.repository';
import { PrismaTrainingsRepository } from './repositories/prisma-trainings.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [TrainingsController],
  providers: [
    TrainingsService,
    PrismaService,
    {
      provide: TrainingRepository,
      useClass: PrismaTrainingsRepository,
    },
  ],
})
export class TrainingsModule {}
