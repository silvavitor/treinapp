import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AthletesModule } from './athletes/athletes.module';
import { TrainingsModule } from './trainings/trainings.module';
import { ExercisesModule } from './exercises/exercises.module';

@Module({
  imports: [AthletesModule, TrainingsModule, ExercisesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
