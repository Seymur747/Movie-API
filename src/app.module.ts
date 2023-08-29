import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { UserController } from './modules/user/user.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from './config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from './db/entities/index.entity';
import { MoviesModule } from './modules/movies/movies.module';
import { MoviesService } from './modules/movies/movies.service';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/src/config/env/${
        process.env.NODE_ENV
      }.env`,
      load: [configuration],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],

      //REFACTOR
      useFactory: (configService: ConfigService) => {
        return {
          type: 'postgres',
          host: configService.get<string>('database.host'),
          port: parseInt(configService.get<string>('database.port')),
          username: configService.get<string>('database.username'),
          password: configService.get<string>('database.password'),
          database: configService.get<string>('database.name'),
          entities,
          synchronize: true,
          timezone: 'Asia/Baku',
          // logging: true,
        };
      },
    }),
    MoviesModule,
  ],
  controllers: [AppController, UserController],
  providers: [AppService, MoviesService],
})
export class AppModule {}
