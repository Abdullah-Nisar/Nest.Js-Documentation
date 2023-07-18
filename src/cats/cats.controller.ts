import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, HttpException, BadRequestException, UseFilters, ForbiddenException, ParseIntPipe, Query, UsePipes, UseGuards, SetMetadata, UseInterceptors, Scope } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import {Cat} from './interfaces/cat.interface';
import { HttpExceptionFilter } from 'src/1. Overall/Exceptions Filter/http-exception.filter';
import { JoiValidationPipe } from 'src/1. Overall/Pipes/joi-validation.pipe';
import { createCatSchema } from 'src/cats/dto/cat.dto';
import { ValidationPipe } from 'src/1. Overall/Pipes/validation.pipe';
import { RolesGuard } from 'src/1. Overall/Guards//role.guard';
import { Roles } from 'src/1. Overall/Guards/role.decorator';
import { LoggingInterceptor } from 'src/1. Overall/Interceptors/logging.interceptor';

// import {Response} from 'express';

//Injection's scope is default by default. Which means it's a singleton.
//To make a custom injection scope to be a singleton, we need to use @Injectable({scope: Scope.DEFAULT}).

//Just as Injections have scope, so do Controllers, Guards, Filters, Interceptors, and Pipes.
//here is how you define the scope of a controller

@Controller({ path: 'cats', scope: Scope.REQUEST })

// @Controller('cats')

// @UseFilters(new HttpExceptionFilter())

// Scoped Guards: Limited to Controller in this context
@UseGuards( new RolesGuard)

//assigning metadata of a role to a class
// @SetMetadata('roles', ['admin'])

//custom roles decorator to assign metadata of a role to a class
@Roles('admin')

//Binding Class interceptor
@UseInterceptors(LoggingInterceptor)
export class CatsController {
  constructor(private catsService: CatsService) {}

  // @Post()
  // async create(@Body() createCatDto: CreateCatDto) {
  //   // this.catsService.create(createCatDto);
  //   return 'This action adds a new cat';
  // }

  // @Post()
  // async create(@Body() createCatDto: CreateCatDto) {
  //   throw new ForbiddenException();
  // }

  // @Post()
  // create(@Res({passthrough: true}) res: Response){
  //   res.status(HttpStatus.CREATED).send();
  // }

  // @Post()
  // @UsePipes(new JoiValidationPipe(createCatSchema))
  // async create(@Body() createCatDto: CreateCatDto) {
  //   this.catsService.create(createCatDto);}

  @Post()
  async create(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);}



  @Get()
  // async findAll(): Promise<Cat[]> {
  //   return this.catsService.findAll();
  // }
  
  // async findAll(){
  //   throw new ForbiddenException();
  // }

  async findAll(){
    try{
      await this.catsService.findAll();
    }catch(e){
      throw new HttpException({status: HttpStatus.FORBIDDEN,error: 'This is a custom message'},
       HttpStatus.FORBIDDEN,{
        cause: e
      });
    }
  }

  // async findAll(){
  //   try{
  //     await this.catsService.findAll();
  //   }catch(error){
  //     throw new BadRequestException('Someting bad happened', {cause: new Error(), description: 'Some error description'})
  //   }
  // }



  @Get(':id')
  async findOne(@Param('id', new ParseIntPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE})) id: number) {
    return this.catsService.findOne(id);
  }
  // findOne(@Param('id') id: string) {
  //   return this.catsService.findOne(+id);
  // }
  // async findOne(@Param('id', ParseIntPipe) id: number) {
  //   return this.catsService.findOne(id);
  // }
  // @Get()
  // async findOne(@Query('id', ParseIntPipe) id: number) {
  //   return this.catsService.findOne(id);
  // }

}