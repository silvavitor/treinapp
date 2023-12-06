import { CreateExerciseDto } from 'src/exercises/dto/create-exercise.dto';
import { UpdateExerciseDto } from 'src/exercises/dto/update-exercise.dto';
import { ExerciseRepository } from './exercises.repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Exercises } from '@prisma/client';

@Injectable()
export class PrismaExercisesRepository implements ExerciseRepository {
  constructor(private prisma: PrismaService) {}

  create(createExerciseDto: CreateExerciseDto): Promise<Exercises> {
    return this.prisma.exercises.create({
      data: createExerciseDto,
    });
  }

  findAll(): Promise<Exercises[]> {
    return this.prisma.exercises.findMany({
      orderBy: {
        name: 'asc',
      },
    });
  }

  findOne(id: string): Promise<Exercises> {
    return this.prisma.exercises.findFirst({
      where: {
        id,
      },
    });
  }

  async update(
    id: string,
    updateExerciseDto: UpdateExerciseDto,
  ): Promise<Exercises> {
    return await this.prisma.exercises.update({
      where: {
        id,
      },
      data: updateExerciseDto,
    });
  }

  async remove(id: string) {
    await this.prisma.exercises.delete({
      where: {
        id,
      },
    });
  }
}
