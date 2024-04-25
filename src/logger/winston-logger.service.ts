// logger/winston-logger.service.ts
import { Injectable } from '@nestjs/common';
import * as winston from 'winston';
import * as path from 'path';

@Injectable()
export class WinstonLoggerService {
  private logger: winston.Logger;

  constructor() {
    const logFilePath = path.join(__dirname, '../../logs/app.log');

    this.logger = winston.createLogger({
      level: 'info',
      format: winston.format.json(),
      transports: [
        new winston.transports.Console({
          format: winston.format.simple(),
        }),
        new winston.transports.File({
          filename: logFilePath,
          level: 'info',
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.json()
          ),
        }),
      ],
    });
  }

  log(message: string) {
    this.logger.info(message);
  }
}
