import { CreateAthleteDto } from 'src/athletes/dto/create-athlete.dto';
import { UpdateAthleteDto } from 'src/athletes/dto/update-athlete.dto';
import { AthleteRepository } from './athletes.repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Athletes } from '@prisma/client';

@Injectable()
export class PrismaAthletesRepository implements AthleteRepository {
  constructor(private prisma: PrismaService) {}

  create(createAthleteDto: CreateAthleteDto): Promise<Athletes> {
    return this.prisma.athletes.create({
      data: createAthleteDto,
    });
  }

  findAll(): Promise<Athletes[]> {
    return this.prisma.athletes.findMany({
      orderBy: {
        name: 'asc',
      },
    });
  }

  findOne(id: string): Promise<Athletes> {
    return this.prisma.athletes.findFirst({
      where: {
        id,
      },
    });
  }

  async update(
    id: string,
    updateAthleteDto: UpdateAthleteDto,
  ): Promise<Athletes> {
    return await this.prisma.athletes.update({
      where: {
        id,
      },
      data: updateAthleteDto,
    });
  }

  async remove(id: string) {
    await this.prisma.athletes.delete({
      where: {
        id,
      },
    });
  }
}
