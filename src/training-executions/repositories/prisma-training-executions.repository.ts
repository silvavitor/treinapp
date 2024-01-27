import { CreateTrainingExecutionDto } from '../dto/create-training-execution.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { TrainingExecutions } from '@prisma/client';
import { TrainingExecutionRepository } from './traning-executions.repository';

@Injectable()
export class PrismaTrainingExecutionsRepository
  implements TrainingExecutionRepository
{
  constructor(private prisma: PrismaService) {}

  async create(
    createTrainingExecutionDto: CreateTrainingExecutionDto,
  ): Promise<TrainingExecutions> {
    const athletesPromise = this.prisma.trainings.findFirst({
      select: {
        athletes: {
          select: {
            id: true,
          },
        },
      },
      where: {
        id: createTrainingExecutionDto.trainingId,
      },
    });

    const exercisesPromise = this.prisma.trainings.findFirst({
      select: {
        exercises: {
          select: {
            id: true,
            sets_qtd: true,
          },
        },
      },
      where: {
        id: createTrainingExecutionDto.trainingId,
      },
    });

    const [{ athletes }, { exercises }] = await Promise.all([
      athletesPromise,
      exercisesPromise,
    ]);

    const exerciseSets = [];

    athletes.forEach((athlete) => {
      exercises.forEach((exercise) => {
        for (let set = 1; set <= exercise.sets_qtd; set++) {
          exerciseSets.push({
            setNumber: set,
            reps: 0,
            weight: 0,
            athletesId: athlete.id,
            exercisesId: exercise.id,
          });
        }
      });
    });

    return this.prisma.trainingExecutions.create({
      data: {
        trainingId: createTrainingExecutionDto.trainingId,
        exercises_sets: {
          create: exerciseSets,
        },
      },
    });
  }

  findAll(): Promise<TrainingExecutions[]> {
    return this.prisma.trainingExecutions.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        _count: true,
        training: {
          select: {
            name: true,
          },
        },
        exercises_sets: {
          select: {
            id: true,
            setNumber: true,
            reps: true,
            weight: true,
            athlete: {
              select: {
                name: true,
              },
            },
            exercise: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });
  }

  findOne(id: string): Promise<TrainingExecutions> {
    return this.prisma.trainingExecutions.findFirst({
      where: {
        id,
      },
      include: {
        _count: true,
        training: {
          select: {
            name: true,
          },
        },
        exercises_sets: {
          select: {
            id: true,
            setNumber: true,
            reps: true,
            weight: true,
            athlete: {
              select: {
                name: true,
              },
            },
            exercise: {
              select: {
                id: true,
                name: true,
              },
            },
          },
          orderBy: [
            {
              setNumber: 'asc',
            },
            {
              athlete: {
                name: 'asc',
              },
            },
          ],
        },
      },
    });
  }

  findByTrainingId(id: string): Promise<TrainingExecutions[]> {
    return this.prisma.trainingExecutions.findMany({
      where: {
        trainingId: id,
      },
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        _count: true,
        exercises_sets: true,
      },
    });
  }

  async remove(id: string) {
    await this.prisma.trainingExecutions.delete({
      where: {
        id,
      },
    });
  }
}
