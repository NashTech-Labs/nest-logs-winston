// app.service.ts
import { Injectable } from '@nestjs/common';
import { WinstonLoggerService } from './logger/winston-logger.service';

@Injectable()
export class AppService {
  constructor(private readonly logger: WinstonLoggerService) {}

  getHello(): string {
    this.logger.log('Returning hello message');
    return 'Hello World!';
  }
}
