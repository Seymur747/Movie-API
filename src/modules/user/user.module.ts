import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { MoviesService } from '../movies/movies.service';

@Module({
  controllers: [UserController],
  providers: [MoviesService],
})
export class UserModule {}
