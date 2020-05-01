import { get } from 'config';
import log from 'winston';
import 'winston-mongodb';
import 'express-async-errors'; // used to handle try catch errors

export function initLogger() {
    log.handleExceptions(
        new log.transports.File({ filename: 'uncaughtExceptions.log' })
    );

    process.on('unhandledRejection', (exception) => {
        throw exception;
    });

    log.add(log.transports.File, { filename: 'logfile.log' });
    log.add(log.transports.MongoDB, {
        db: get('mongodbUrl'),
        level: process.env.LOG_LEVEL || 'info',
    });
}
