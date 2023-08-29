import { QueryException } from './../types/exception.types';
import { QueryFailedError } from 'typeorm';
export class QueryError implements QueryException {
  public statusCode: number = 400
  public message: string

  constructor(exception: any) {
    if (exception instanceof QueryFailedError) {
      switch ((exception as any).code) {
        case '23505':
          this.statusCode = 409;
          break;
      }
    }
    this.message = exception?.detail;
  }
}

