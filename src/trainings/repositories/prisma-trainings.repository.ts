import { CreateTrainingDto } from 'src/trainings/dto/create-training.dto';
import { UpdateTrainingDto } from 'src/trainings/dto/update-training.dto';
import { TrainingRepository } from './trainings.repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Trainings } from '@prisma/client';

@Injectable()
export class PrismaTrainingsRepository implements TrainingRepository {
  constructor(private prisma: PrismaService) {}

  create(createTrainingDto: CreateTrainingDto): Promise<Trainings> {
    return this.prisma.trainings.create({
      data: {
        name: createTrainingDto.name,
        exercises: {
          create: createTrainingDto.exercises,
        },
        athletes: {
          connect: createTrainingDto.athletes.map((id) => ({
            id,
          })),
        },
      },
    });
  }

  findAll(): Promise<Trainings[]> {
    return this.prisma.trainings.findMany({
      orderBy: {
        name: 'asc',
      },
      include: {
        _count: true,
        athletes: true,
        exercises: true,
      },
    });
  }

  findOne(id: string): Promise<Trainings> {
    return this.prisma.trainings.findFirst({
      where: {
        id,
      },
      include: {
        athletes: true,
        exercises: true,
      },
    });
  }

  findByName(name: string): Promise<Trainings> {
    return this.prisma.trainings.findFirst({
      where: {
        name,
      },
    });
  }

  async update(
    id: string,
    updateTrainingDto: UpdateTrainingDto,
  ): Promise<Trainings> {
    return await this.prisma.trainings.update({
      where: {
        id,
      },
      data: {
        name: updateTrainingDto.name,
        athletes: {
          set: updateTrainingDto.athletes.map((id) => ({ id })),
        },
      },
    });
  }

  async remove(id: string) {
    await this.prisma.trainings.delete({
      where: {
        id,
      },
    });
  }
}
