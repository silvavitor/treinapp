import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AthletesModule } from './athletes/athletes.module';

@Module({
  imports: [AthletesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
