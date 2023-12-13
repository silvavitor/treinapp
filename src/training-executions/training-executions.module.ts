import { Module } from '@nestjs/common';
import { TrainingExecutionsService } from './training-executions.service';
import { TrainingExecutionsController } from './training-executions.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { TrainingExecutionRepository } from './repositories/traning-executions.repository';
import { PrismaTrainingExecutionsRepository } from './repositories/prisma-training-executions.repository';

@Module({
  controllers: [TrainingExecutionsController],
  providers: [
    TrainingExecutionsService,
    PrismaService,
    {
      provide: TrainingExecutionRepository,
      useClass: PrismaTrainingExecutionsRepository,
    },
  ],
})
export class TrainingExecutionsModule {}
