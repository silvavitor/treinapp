import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AthletesModule } from './athletes/athletes.module';
import { TrainingsModule } from './trainings/trainings.module';
import { ExercisesModule } from './exercises/exercises.module';
import { TrainingExecutionsModule } from './training-executions/training-executions.module';

@Module({
  imports: [AthletesModule, TrainingsModule, ExercisesModule, TrainingExecutionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
