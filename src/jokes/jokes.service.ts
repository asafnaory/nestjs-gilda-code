import { Injectable, HttpService, NotFoundException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class JokesService {
  constructor(private httpService: HttpService) {}
  getRandomJoke(): Observable<string> {
    return this.httpService
      .get('https://api.chucknorris.io/jokes/random')
      .pipe(map(res => res.data.value));
  }

  getCategories(): Observable<[]> {
    return this.httpService
      .get('https://api.chucknorris.io/jokes/categories')
      .pipe(map(res => res.data));
  }

  getFromCategory(category): Observable<string> {
    return this.httpService
      .get(`https://api.chucknorris.io/jokes/random?category=${category}`)
      .pipe(map(res => res.data.value));
  }
}
