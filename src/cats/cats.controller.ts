import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, HttpException, BadRequestException, UseFilters, ForbiddenException, ParseIntPipe } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import {Cat} from './interfaces/cat.interface';
import { HttpExceptionFilter } from 'src/http-exception.filter';


// import {Response} from 'express';


@Controller('cats')
@UseFilters(new HttpExceptionFilter())
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  // async create(@Body() createCatDto: CreateCatDto) {
  //   // this.catsService.create(createCatDto);
  //   return 'This action adds a new cat';
  // }

  
  async create(@Body() createCatDto: CreateCatDto) {
    throw new ForbiddenException();
  }
  // @Post()
  // create(@Res({passthrough: true}) res: Response){
  //   res.status(HttpStatus.CREATED).send();
  // }

  @Get()
  // async findAll(): Promise<Cat[]> {
  //   return this.catsService.findAll();
  // }
  async findAll(){
    throw new HttpException('Hello Cat', HttpStatus.FORBIDDEN);
  }
  // async findAll(){
  //   throw new ForbiddenException();
  // }

  // async findAll(){
  //   try{
  //     await this.catsService.findAll();
  //   }catch(e){
  //     throw new HttpException({status: HttpStatus.FORBIDDEN,error: 'This is a custom message'},
  //      HttpStatus.FORBIDDEN,{
  //       cause: e
  //     });
  //   }
  // }

  // async findAll(){
  //   try{
  //     await this.catsService.findAll();
  //   }catch(error){
  //     throw new BadRequestException('Someting bad happened', {cause: new Error(), description: 'Some error description'})
  //   }
  // }



  @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.catsService.findOne(+id);
  // }
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.catsService.findOne(id);
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