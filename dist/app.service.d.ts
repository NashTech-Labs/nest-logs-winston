import { WinstonLoggerService } from './logger/winston-logger.service';
export declare class AppService {
    private readonly logger;
    constructor(logger: WinstonLoggerService);
    getHello(): string;
}
