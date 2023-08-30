import { Injectable } from '@nestjs/common';
import { Movies } from 'src/db/entities/movies.entity';
import { DataSource, Repository } from 'typeorm';
import { NewGenreDto, NewMovieDto, UpdateGenreDto, UpdateMovieDto } from './dto/index.dto';
import { Genres } from 'src/db/entities/genres.entity';
import { paginate } from 'src/utils';

//Service for handling database CRUD methods

@Injectable()
export class MoviesService {
  private movieRepo: Repository<Movies>;
  private genreRepo: Repository<Genres>;

  constructor(private dataSource: DataSource) {
    this.movieRepo = dataSource.getRepository('movies');
    this.genreRepo = dataSource.getRepository('genres');
  }
  async getMovieList(search, page?: number, limit = 10): Promise<Movies[]> {
    const pagination = paginate(page, limit);
    let query = await this.movieRepo.createQueryBuilder('movies');

    page && (query = query.take(pagination.take).skip(pagination.skip));

    search &&
      (query = query
        .where('LOWER(movies.title) LIKE LOWER(:title)', {
          title: `%${search}%`,
        })
        .orWhere(':genre = ANY(movies.genre)', { genre: search }));

    const movieList = query.getMany();
    return movieList;
  }

  async getOneMovieBy(condition: any): Promise<Movies> {
    const movie = await this.movieRepo.findOne({ where: condition });
    return movie;
  }

  async updateMovie(movieId: number, movieDto: UpdateMovieDto): Promise<Movies> {
    const updatedMovie = await this.movieRepo.save({
      id: movieId,
      ...movieDto,
    });
    return updatedMovie;
  }

  async addMovie(movieDto: NewMovieDto): Promise<Movies> {
    const newMovie = this.movieRepo.save(movieDto);
    return newMovie;
  }

  async deleteMovie(condition: any): Promise<Movies | any> {
    const deletedMovie = await this.movieRepo.delete(condition);
    return deletedMovie;
  }

  async getGenreList(): Promise<Genres[]> {
    const genreList = await this.genreRepo.find();
    return genreList;
  }

  async getOneGenreBy(condition: any): Promise<Genres> {
    const genre = await this.genreRepo.findOne({ where: condition });
    return genre;
  }

  async updateGenre(genreId: number, genreDto: UpdateGenreDto): Promise<Genres> {
    const updatedGenre = await this.genreRepo.save({
      id: genreId,
      ...genreDto,
    });
    return updatedGenre;
  }

  async addGenre(genreDto: NewGenreDto): Promise<Genres> {
    const newGenre = this.genreRepo.save(genreDto);
    return newGenre;
  }

  async deleteGenre(condition: any): Promise<Genres | any> {
    const deletedGenre = await this.genreRepo.delete(condition);
    return deletedGenre;
  }

  async deleteGenreFromMovie(genreToRemove: string): Promise<void> {
    await this.movieRepo
      .createQueryBuilder()
      .update(Movies)
      .set({
        genre: () => `array_remove("genre", '${genreToRemove}')`,
      })
      .execute();
  }
}
