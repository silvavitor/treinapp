import { TrainingExecutions } from '@prisma/client';
import { CreateTrainingExecutionDto } from '../dto/create-training-execution.dto';

export abstract class TrainingExecutionRepository {
  abstract create(
    createTrainingExecutionDto: CreateTrainingExecutionDto,
  ): Promise<TrainingExecutions>;
  abstract findAll(): Promise<TrainingExecutions[]>;
  abstract findOne(id: string): Promise<TrainingExecutions>;
  abstract findByTrainingId(id: string): Promise<TrainingExecutions[]>;
  abstract remove(id: string): void;
}
