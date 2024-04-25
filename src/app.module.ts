// app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WinstonLoggerService } from './logger/winston-logger.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, WinstonLoggerService],
})
export class AppModule {}
