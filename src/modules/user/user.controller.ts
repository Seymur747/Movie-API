import {
  Get,
  Post,
  Put,
  Delete,
  Body,
  Controller,
  HttpCode,
  UsePipes,
  ValidationPipe,
  Param,
  ParseIntPipe,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { MoviesService } from '../movies/movies.service';
import { NewMovieDto, UpdateMovieDto } from '../movies/dto/index.dto';
import { QueryError } from 'src/exceptions/QueryError.exception';

@Controller('movies')
export class UserController {
  constructor(public movieService: MoviesService) {}

  @Get()
  async getMovieList() {
    const movieList = await this.movieService.getMovieList();
    return movieList;
  }

  @Post()
  @HttpCode(201)
  @UsePipes(new ValidationPipe())
  async addMovie(@Body() newMovieDto: NewMovieDto) {
    try {
      const newMovie = await this.movieService.addMovie(newMovieDto);
      return newMovie;
    } catch (err) {
      throw new QueryError(err);
    }
  }

  @Delete('/:movieId')
  @UsePipes(new ValidationPipe())
  async deleteMovie(@Param('movieId', new ParseIntPipe()) movieId: number) {
    const condition = { id: movieId };
    const movie = await this.movieService.getOneMovieBy(condition);
    if (!movie) {
      throw new NotFoundException(`Movie not found`);
    }
    try {
      await this.movieService.deleteMovie(condition);
      return {
        message: 'Movie has been deleted',
      };
    } catch (err) {
      throw new QueryError(err);
    }
  }
  @Put('/:movieId')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async updateMovie(
    @Param('movieId', new ParseIntPipe()) movieId: number,
    @Body() updateMovieDto: UpdateMovieDto,
  ): Promise<any> {
    const condition = { id: movieId };
    const movie = await this.movieService.getOneMovieBy(condition);
    const keys = Object.keys(updateMovieDto);

    if (!movie) {
      throw new NotFoundException(`Movie not found`);
    }

    if (!keys?.length) {
      throw new BadRequestException('Requires at least one parametr');
    }
    try {
      await this.movieService.updateMovie(movieId, updateMovieDto);
      return {
        statusCode: 200,
        message: 'Movie has been updated',
      };
    } catch (err) {
      throw new QueryError(err);
    }
  }
}
