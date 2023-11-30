import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateAthleteDto } from './dto/create-athlete.dto';
import { UpdateAthleteDto } from './dto/update-athlete.dto';
import { AthleteRepository } from './repositories/athletes.repository';
import { isUUID } from 'class-validator';

@Injectable()
export class AthletesService {
  constructor(private repository: AthleteRepository) {}

  create(createAthleteDto: CreateAthleteDto) {
    if (!createAthleteDto.name) {
      throw new BadRequestException({ error: 'name is required' });
    }

    return this.repository.create(createAthleteDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  async findOne(id: string) {
    if (!isUUID(id)) {
      throw new BadRequestException({ error: 'Invalid athlete id' });
    }

    const athlete = await this.repository.findOne(id);

    if (!athlete) {
      throw new NotFoundException({ error: 'Athlete not found' });
    }

    return athlete;
  }

  async update(id: string, updateAthleteDto: UpdateAthleteDto) {
    if (!isUUID(id)) {
      throw new BadRequestException({ error: 'Invalid athlete id' });
    }

    if (!updateAthleteDto.name) {
      throw new BadRequestException({ error: 'name is required' });
    }

    const athleteExist = await this.repository.findOne(id);

    if (!athleteExist) {
      throw new NotFoundException({ error: 'Athlete not found!' });
    }

    return this.repository.update(id, updateAthleteDto);
  }

  async remove(id: string) {
    const athleteExist = await this.repository.findOne(id);

    if (!athleteExist) {
      throw new NotFoundException({ error: 'Athlete not found!' });
    }

    return this.repository.remove(id);
  }
}
