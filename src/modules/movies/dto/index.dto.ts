import {
  IsNotEmpty,
  IsString,
  IsArray,
  ArrayNotEmpty,
  ArrayUnique,
  IsOptional,
  Validate,
  IsInt,
  Min,
  IsPositive,
  IsNumberString,
} from 'class-validator';

import { Transform, Type } from 'class-transformer';
import { CustomDateValidator } from 'src/utils';

export class NewMovieDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @Validate(CustomDateValidator)
  releaseDate: string;

  @IsNotEmpty()
  @IsArray()
  @ArrayNotEmpty()
  @ArrayUnique()
  @IsString({ each: true })
  genre: string[];
}

export class UpdateMovieDto {
  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @Validate(CustomDateValidator)
  releaseDate: string;

  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @ArrayUnique()
  @IsString({ each: true })
  genre: string[];
}

export class NewGenreDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}

export class UpdateGenreDto {
  @IsOptional()
  @IsString()
  name: string;
}

export class PaginationDto {
  @IsOptional()
  @IsNumberString()
  page: number;

  @IsOptional()
  @IsNumberString()
  limit: number;
}
