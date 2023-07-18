import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    constructor(private userService: UsersService) {}


  create(id: number) {
    return `This action adds a new cat`;
  }

  findAll(): []{
    return [];
  }

  findOne(id: number) {
    return `This action returns a #${id} cat`;
  }

  update(id: number) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
