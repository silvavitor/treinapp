import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateTrainingExecutionDto } from './dto/create-training-execution.dto';
import { TrainingExecutionRepository } from './repositories/traning-executions.repository';
import { isUUID } from 'class-validator';

@Injectable()
export class TrainingExecutionsService {
  constructor(private repository: TrainingExecutionRepository) {}

  async create(createTrainingExecutionDto: CreateTrainingExecutionDto) {
    if (!createTrainingExecutionDto.trainingId) {
      throw new BadRequestException({ error: 'trainingId is required' });
    }

    return this.repository.create(createTrainingExecutionDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  async findOne(id: string) {
    if (!isUUID(id)) {
      throw new BadRequestException({
        error: 'Invalid training executions id',
      });
    }

    const training = await this.repository.findOne(id);

    if (!training) {
      throw new NotFoundException({ error: 'Training execution not found' });
    }

    return training;
  }

  async findByTrainingId(id: string) {
    if (!isUUID(id)) {
      throw new BadRequestException({
        error: 'Invalid training id',
      });
    }

    const trainings = await this.repository.findByTrainingId(id);

    if (!trainings || trainings.length === 0) {
      throw new NotFoundException({ error: 'Training executions not found' });
    }

    return trainings;
  }

  async remove(id: string) {
    const trainingExist = await this.repository.findOne(id);

    if (!trainingExist) {
      throw new NotFoundException({ error: 'Training executions not found!' });
    }

    return this.repository.remove(id);
  }
}
