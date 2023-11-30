import { Module } from '@nestjs/common';
import { AthletesService } from './athletes.service';
import { AthletesController } from './athletes.controller';
import { AthleteRepository } from './repositories/athletes.repository';
import { PrismaAthletesRepository } from './repositories/prisma-athletes.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [AthletesController],
  providers: [
    AthletesService,
    PrismaService,
    {
      provide: AthleteRepository,
      useClass: PrismaAthletesRepository,
    },
  ],
})
export class AthletesModule {}
