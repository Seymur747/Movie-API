import { Injectable } from '@nestjs/common';
import { Movies } from 'src/db/entities/movies.entity';
import { DataSource, Repository } from 'typeorm';
import { NewMovieDto } from './dto/index.dto';

@Injectable()
export class MoviesService {
  private movieRepo: Repository<Movies>;

  constructor(private dataSource: DataSource) {
    this.movieRepo = dataSource.getRepository('movies');
  }
  async getMovieList() {
    const movieList = await this.movieRepo.find();
    return movieList;
  }

  async getOneMovieBy(condition: any) {
    const movie = await this.movieRepo.findOne({ where: condition });
    return movie;
  }

  async updateMovie(movieId: number, movieDto) {
    const updatedMovie = await this.movieRepo.save({
      id: movieId,
     ...movieDto,
    });
    return updatedMovie;
  }

  async addMovie(movieDto: NewMovieDto) {
    const newMovie = this.movieRepo.save(movieDto);
    return newMovie;
  }

  async deleteMovie(condition: any) {
    const deletedUser = this.movieRepo.delete(condition);
    return deletedUser;
  }
}
