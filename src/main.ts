import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import helmet from 'helmet';


async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService)
  const port = config.get('port')

  //MIDDLEWARES
  app.setGlobalPrefix('api')
  app.enableCors()
  app.use(helmet());

  await app.listen(port, () => console.log(`🚀🚀🚀  App started on port : ${port}`));
}
bootstrap();


