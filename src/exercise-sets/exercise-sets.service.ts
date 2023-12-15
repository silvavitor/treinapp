import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateExerciseSetsDto } from './dto/create-exercise-sets.dto';
import { UpdateExerciseSetsDto } from './dto/update-exercise-sets.dto';
import { ExerciseSetsRepository } from './repositories/exercise-sets.repository';
import { isUUID } from 'class-validator';

@Injectable()
export class ExerciseSetsService {
  constructor(private repository: ExerciseSetsRepository) {}

  create(createExerciseSets: CreateExerciseSetsDto) {
    if (!createExerciseSets.setNumber) {
      throw new BadRequestException({ error: 'setNumber is required' });
    }

    if (!createExerciseSets.reps) {
      throw new BadRequestException({ error: 'reps is required' });
    }

    if (createExerciseSets.weight === null) {
      throw new BadRequestException({ error: 'weight is required' });
    }

    if (!createExerciseSets.athletesId) {
      throw new BadRequestException({ error: 'athletesId is required' });
    }

    if (!createExerciseSets.exercisesId) {
      throw new BadRequestException({ error: 'exercisesId is required' });
    }

    if (!createExerciseSets.trainingExecutionId) {
      throw new BadRequestException({
        error: 'trainingExecutionId is required',
      });
    }

    return this.repository.create(createExerciseSets);
  }

  findAll() {
    return this.repository.findAll();
  }

  async findOne(id: string) {
    if (!isUUID(id)) {
      throw new BadRequestException({ error: 'Invalid exercise sets id' });
    }

    const exerciseSet = await this.repository.findOne(id);

    if (!exerciseSet) {
      throw new NotFoundException({ error: 'exercise set not found' });
    }

    return exerciseSet;
  }

  async update(id: string, updateExerciseDto: UpdateExerciseSetsDto) {
    if (!isUUID(id)) {
      throw new BadRequestException({ error: 'Invalid exercise id' });
    }

    const exerciseSetExist = await this.repository.findOne(id);

    if (!exerciseSetExist) {
      throw new NotFoundException({ error: 'exercise set not found!' });
    }

    return this.repository.update(id, updateExerciseDto);
  }

  async remove(id: string) {
    const exerciseSetExist = await this.repository.findOne(id);

    if (!exerciseSetExist) {
      throw new NotFoundException({ error: 'Exercise not found!' });
    }

    return this.repository.remove(id);
  }
}
