import { ExerciseSets } from '@prisma/client';
import { CreateExerciseSetsDto } from '../dto/create-exercise-sets.dto';
import { UpdateExerciseSetsDto } from '../dto/update-exercise-sets.dto';

export abstract class ExerciseSetsRepository {
  abstract create(
    createExerciseSetsDto: CreateExerciseSetsDto,
  ): Promise<ExerciseSets>;
  abstract findAll(): Promise<ExerciseSets[]>;
  abstract findOne(id: string): Promise<ExerciseSets>;
  abstract update(
    id: string,
    updateExerciseSetsDto: UpdateExerciseSetsDto,
  ): Promise<ExerciseSets>;
  abstract remove(id: string): void;
}
