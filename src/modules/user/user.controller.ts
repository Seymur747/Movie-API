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
  Query,
} from '@nestjs/common';
import { ILike, Brackets } from 'typeorm';
import { MoviesService } from '../movies/movies.service';
import {
  NewGenreDto,
  NewMovieDto,
  UpdateGenreDto,
  UpdateMovieDto,
  GetMovieListDto,
} from '../movies/dto/index.dto';
import { QueryError } from 'src/exceptions/QueryError.exception';
import { Movies } from 'src/db/entities/movies.entity';
import { Genres } from 'src/db/entities/genres.entity';

//Controller for handling HTTP requests
@Controller()
export class UserController {
  constructor(public movieService: MoviesService) {}

  @Get('/movies')
  async getMovieList(@Query(ValidationPipe) movieListDto: GetMovieListDto): Promise<Movies[]> {
    const { page, search, limit = 10 } = movieListDto;
    const movieList = await this.movieService.getMovieList(search, page, limit);
    return movieList;
  }

  @Post('/movie')
  @HttpCode(201)
  @UsePipes(new ValidationPipe())
  async addMovie(@Body() newMovieDto: NewMovieDto): Promise<Movies> {
    try {
      const newMovie = await this.movieService.addMovie(newMovieDto);
      return newMovie;
    } catch (err) {
      throw new QueryError(err);
    }
  }

  @Delete('/movies/:movieId')
  @UsePipes(new ValidationPipe())
  async deleteMovie(@Param('movieId', new ParseIntPipe()) movieId: number): Promise<any> {
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

  @Put('/movies/:movieId')
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
        message: 'Movie has been updated',
      };
    } catch (err) {
      throw new QueryError(err);
    }
  }

  @Get('/genres')
  async getGenreList(): Promise<Genres[]> {
    const genreList = await this.movieService.getGenreList();
    return genreList;
  }

  @Post('/genre')
  @HttpCode(201)
  @UsePipes(new ValidationPipe())
  async addGenre(@Body() newGenreDto: NewGenreDto): Promise<Genres> {
    try {
      const newGenre = await this.movieService.addGenre(newGenreDto);
      return newGenre;
    } catch (err) {
      throw new QueryError(err);
    }
  }

  @Delete('/genres/:genreId')
  @UsePipes(new ValidationPipe())
  async deleteGenre(@Param('genreId', new ParseIntPipe()) genreId: number): Promise<any> {
    const condition = { id: genreId };
    const genre = await this.movieService.getOneGenreBy(condition);
    if (!genre) {
      throw new NotFoundException(`Genre not found`);
    }
    try {
      await this.movieService.deleteGenre(condition);
      await this.movieService.deleteGenreFromMovie(genre.name);
      return {
        message: 'Genre has been deleted',
      };
    } catch (err) {
      throw new QueryError(err);
    }
  }

  @Put('/genres/:genreId')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async updateGenre(
    @Param('genreId', new ParseIntPipe()) genreId: number,
    @Body() updateGenreDto: UpdateGenreDto,
  ): Promise<any> {
    const condition = { id: genreId };
    const genre = await this.movieService.getOneGenreBy(condition);
    const keys = Object.keys(updateGenreDto);

    if (!genre) {
      throw new NotFoundException(`Genre not found`);
    }

    if (!keys?.length) {
      throw new BadRequestException('Requires at least one parametr');
    }

    try {
      await this.movieService.updateGenre(genreId, updateGenreDto);
      return {
        message: 'Genre has been updated',
      };
    } catch (err) {
      throw new QueryError(err);
    }
  }
}
