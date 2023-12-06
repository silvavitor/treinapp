import { Exercises } from '@prisma/client';
import { CreateExerciseDto } from '../dto/create-exercise.dto';
import { UpdateExerciseDto } from '../dto/update-exercise.dto';

export abstract class ExerciseRepository {
  abstract create(createExerciseDto: CreateExerciseDto): Promise<Exercises>;
  abstract findAll(): Promise<Exercises[]>;
  abstract findOne(id: string): Promise<Exercises>;
  abstract update(
    id: string,
    updateExerciseDto: UpdateExerciseDto,
  ): Promise<Exercises>;
  abstract remove(id: string): void;
}
