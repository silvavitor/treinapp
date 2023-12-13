import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { TrainingExecutionsService } from './training-executions.service';
import { CreateTrainingExecutionDto } from './dto/create-training-execution.dto';

@Controller('training-executions')
export class TrainingExecutionsController {
  constructor(
    private readonly trainingExecutionsService: TrainingExecutionsService,
  ) {}

  @Post()
  create(@Body() createTrainingExecutionDto: CreateTrainingExecutionDto) {
    return this.trainingExecutionsService.create(createTrainingExecutionDto);
  }

  @Get()
  findAll() {
    return this.trainingExecutionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trainingExecutionsService.findOne(id);
  }

  @Get('/training/:id')
  findByTrainingId(@Param('id') id: string) {
    return this.trainingExecutionsService.findByTrainingId(id);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.trainingExecutionsService.remove(id);
  }
}
