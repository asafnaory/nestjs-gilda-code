import { Controller, Get, UseGuards, Post, Req, Response, Query, Param, Body, ParseIntPipe } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { AuthGuard } from './auth.guard';
import { BodyDto } from './body-dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Get()
  @UseGuards(new AuthGuard())
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/req')
  getReq(@Req() req) {
    console.log('this is the request: ')
    console.log(req)
  }

  @Get('/res')
  getRes(@Response() res) {
    console.log('this is the response: ')
    console.log(res)
  }

  @Get('/query')
  getQuery(@Query() query) {
    console.log('this is the query params: ')
    console.log(query)
  }


  @Get('params/:param')
  getParams(@Param('param') param: string) {
    console.log(param)
  }

  // dto's
  @Post('/body')
  getBody(@Body() body: BodyDto) {
    console.log(body)
  }


  @Get('number/:number')
  parseInt(@Param('number', ParseIntPipe) number: number){
      console.log(typeof number);
  }


  // @Get('number/:number')
  // parseInt(@Param('number') number: string){
  //     console.log(typeof number);
  // }
  
}
