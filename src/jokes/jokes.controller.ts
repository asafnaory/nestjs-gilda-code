import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JokesService } from './jokes.service';

@Controller('jokes')
export class JokesController {
  constructor(private jokeService: JokesService) {}

  @Get('random')
  getRandomJoke(): Observable<string> {
    return this.jokeService.getRandomJoke();
  }

  @Get('categories')
  getCategories(): Observable<[]> {
    return this.jokeService.getCategories();
  }

  @Get('random/:category')
  getFromCategory(@Param('category') category: string) : Observable<string>{
      return this.jokeService.getFromCategory(category);
  }
}
