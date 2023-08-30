import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { logger } from './utils/logger';
import { loggerMiddleware } from './middlewares';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const port = config.get('port');

  //MIDDLEWARES
  app.setGlobalPrefix('api');
  app.enableCors();
  app.use(helmet());
  app.use(loggerMiddleware);
  await app.listen(port, () => logger.info(`🚀🚀🚀  App started on port : ${port}`));
}
bootstrap();
