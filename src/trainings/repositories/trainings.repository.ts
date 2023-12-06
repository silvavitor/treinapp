import { Trainings } from '@prisma/client';
import { CreateTrainingDto } from '../dto/create-training.dto';
import { UpdateTrainingDto } from '../dto/update-training.dto';

export abstract class TrainingRepository {
  abstract create(createTrainingDto: CreateTrainingDto): Promise<Trainings>;
  abstract findAll(): Promise<Trainings[]>;
  abstract findOne(id: string): Promise<Trainings>;
  abstract findByName(name: string): Promise<Trainings>;
  abstract update(
    id: string,
    updateTrainingDto: UpdateTrainingDto,
  ): Promise<Trainings>;
  abstract remove(id: string): void;
}
