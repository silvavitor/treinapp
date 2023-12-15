import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { ExerciseSetsService } from './exercise-sets.service';
import { CreateExerciseSetsDto } from './dto/create-exercise-sets.dto';
import { UpdateExerciseSetsDto } from './dto/update-exercise-sets.dto';

@Controller('exercise-sets')
export class ExerciseSetsController {
  constructor(private readonly exercisesService: ExerciseSetsService) {}

  @Post()
  create(@Body() createExerciseDto: CreateExerciseSetsDto) {
    return this.exercisesService.create(createExerciseDto);
  }

  @Get()
  findAll() {
    return this.exercisesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exercisesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateExerciseDto: UpdateExerciseSetsDto,
  ) {
    return this.exercisesService.update(id, updateExerciseDto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.exercisesService.remove(id);
  }
}
