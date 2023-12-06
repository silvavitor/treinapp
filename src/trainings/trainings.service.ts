import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateTrainingDto } from './dto/create-training.dto';
import { UpdateTrainingDto } from './dto/update-training.dto';
import { TrainingRepository } from './repositories/trainings.repository';
import { isUUID } from 'class-validator';
@Injectable()
export class TrainingsService {
  constructor(private repository: TrainingRepository) {}

  async create(createTrainingDto: CreateTrainingDto) {
    if (!createTrainingDto.name) {
      throw new BadRequestException({ error: 'training name is required' });
    }

    if (createTrainingDto.athletes.length === 0) {
      throw new BadRequestException({
        error: 'must have at least one athlete',
      });
    }

    if (createTrainingDto.exercises.length === 0) {
      throw new BadRequestException({
        error: 'must have at least one exercise',
      });
    }

    const trainingExists = await this.repository.findByName(
      createTrainingDto.name,
    );

    if (trainingExists) {
      throw new BadRequestException({
        error: 'training name already in use',
      });
    }

    return this.repository.create(createTrainingDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  async findOne(id: string) {
    if (!isUUID(id)) {
      throw new BadRequestException({ error: 'Invalid training id' });
    }

    const training = await this.repository.findOne(id);

    if (!training) {
      throw new NotFoundException({ error: 'Training not found' });
    }

    return training;
  }

  async update(id: string, updateTrainingDto: UpdateTrainingDto) {
    if (!isUUID(id)) {
      throw new BadRequestException({ error: 'Invalid training id' });
    }

    const trainingExist = await this.repository.findOne(id);

    if (!trainingExist) {
      throw new NotFoundException({ error: 'Training not found!' });
    }

    return this.repository.update(id, updateTrainingDto);
  }

  async remove(id: string) {
    const trainingExist = await this.repository.findOne(id);

    if (!trainingExist) {
      throw new NotFoundException({ error: 'Training not found!' });
    }

    return this.repository.remove(id);
  }
}
