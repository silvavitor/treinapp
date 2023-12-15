import { CreateExerciseSetsDto } from 'src/exercise-sets/dto/create-exercise-sets.dto';
import { UpdateExerciseSetsDto } from 'src/exercise-sets/dto/update-exercise-sets.dto';
import { ExerciseSetsRepository } from './exercise-sets.repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { ExerciseSets } from '@prisma/client';

@Injectable()
export class PrismaExerciseSetsRepository implements ExerciseSetsRepository {
  constructor(private prisma: PrismaService) {}

  create(createExerciseSetsDto: CreateExerciseSetsDto): Promise<ExerciseSets> {
    return this.prisma.exerciseSets.create({
      data: createExerciseSetsDto,
    });
  }

  findAll(): Promise<ExerciseSets[]> {
    return this.prisma.exerciseSets.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  findOne(id: string): Promise<ExerciseSets> {
    return this.prisma.exerciseSets.findFirst({
      where: {
        id,
      },
    });
  }

  async update(
    id: string,
    updateExerciseSetsDto: UpdateExerciseSetsDto,
  ): Promise<ExerciseSets> {
    return await this.prisma.exerciseSets.update({
      where: {
        id,
      },
      data: updateExerciseSetsDto,
    });
  }

  async remove(id: string) {
    await this.prisma.exerciseSets.delete({
      where: {
        id,
      },
    });
  }
}
