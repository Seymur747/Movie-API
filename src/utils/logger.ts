import * as winston from 'winston';
export const logger = winston.createLogger({
  level: 'info',

  format: winston.format.combine(
    winston.format.timestamp(), // Add timestamp to logs
    winston.format.json(),
  ),
  defaultMeta: { service: 'movie-app' },
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: 'error.log',
      dirname: 'logs',
      level: 'error',
    }),
    new winston.transports.File({ filename: 'combined.log', dirname: 'logs' }),
  ],
});
