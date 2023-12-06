import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { ExerciseRepository } from './repositories/exercises.repository';
import { isUUID } from 'class-validator';

@Injectable()
export class ExercisesService {
  constructor(private repository: ExerciseRepository) {}

  create(createExerciseDto: CreateExerciseDto) {
    if (!createExerciseDto.trainingId) {
      throw new BadRequestException({ error: 'trainingId is required' });
    }

    if (!createExerciseDto.name) {
      throw new BadRequestException({ error: 'name is required' });
    }

    if (!createExerciseDto.sets_qtd) {
      throw new BadRequestException({ error: 'sets_qtd is required' });
    }

    return this.repository.create(createExerciseDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  async findOne(id: string) {
    if (!isUUID(id)) {
      throw new BadRequestException({ error: 'Invalid exercise id' });
    }

    const exercise = await this.repository.findOne(id);

    if (!exercise) {
      throw new NotFoundException({ error: 'Exercise not found' });
    }

    return exercise;
  }

  async update(id: string, updateExerciseDto: UpdateExerciseDto) {
    if (!isUUID(id)) {
      throw new BadRequestException({ error: 'Invalid exercise id' });
    }

    const exerciseExist = await this.repository.findOne(id);

    if (!exerciseExist) {
      throw new NotFoundException({ error: 'Exercise not found!' });
    }

    return this.repository.update(id, updateExerciseDto);
  }

  async remove(id: string) {
    const exerciseExist = await this.repository.findOne(id);

    if (!exerciseExist) {
      throw new NotFoundException({ error: 'Exercise not found!' });
    }

    return this.repository.remove(id);
  }
}
