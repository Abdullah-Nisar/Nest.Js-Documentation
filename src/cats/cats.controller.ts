import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, HttpException } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import {Cat} from './interfaces/cat.interface';
import { ForbiddenException } from 'src/forbidden.exception';
// import {Response} from 'express';


@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    // this.catsService.create(createCatDto);
    return 'This action adds a new cat';
  }
  // @Post()
  // create(@Res({passthrough: true}) res: Response){
  //   res.status(HttpStatus.CREATED).send();
  // }

  @Get()
  // async findAll(): Promise<Cat[]> {
  //   return this.catsService.findAll();
  // }
  // async findAll(){
  //   throw new HttpException('Hello Cat', HttpStatus.FORBIDDEN);
  // }
  async findAll(){
    throw new ForbiddenException();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catsService.update(+id, updateCatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catsService.remove(+id);
  }
}