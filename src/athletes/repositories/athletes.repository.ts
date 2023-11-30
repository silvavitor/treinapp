import { Athletes } from '@prisma/client';
import { CreateAthleteDto } from '../dto/create-athlete.dto';
import { UpdateAthleteDto } from '../dto/update-athlete.dto';

export abstract class AthleteRepository {
  abstract create(createAthleteDto: CreateAthleteDto): Promise<Athletes>;
  abstract findAll(): Promise<Athletes[]>;
  abstract findOne(id: string): Promise<Athletes>;
  abstract update(
    id: string,
    updateAthleteDto: UpdateAthleteDto,
  ): Promise<Athletes>;
  abstract remove(id: string): void;
}
