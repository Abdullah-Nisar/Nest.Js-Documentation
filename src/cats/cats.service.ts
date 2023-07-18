import { Inject, Injectable, Scope, forwardRef } from '@nestjs/common';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './interfaces/cat.interface';
import { REQUEST } from '@nestjs/core';
import { CommonService } from 'src/Common/common.service';

//here, we want to access the reference of the request object, so we will inject REQUEST object.
//for the GraphQL applications we use, context instead of request object.
// @Injectable({ scope: Scope.REQUEST})

@Injectable()
export class CatsService {

  //accessing the request object
  // constructor(@Inject(REQUEST) private request: Request) {}


  //resolving circular dependency by forwardRef method
  constructor(
    @Inject(forwardRef(() => CommonService))
    private commonService: CommonService,
  ){}
  
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }

  findOne(id: number) {
    return `This action returns a #${id} cat`;
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
