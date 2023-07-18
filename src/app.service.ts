import { Injectable } from '@nestjs/common';
import { HelloService } from 'src/Hello/hello.service';

@Injectable()
export class AppService {
  constructor(private helloService: HelloService){}

  getRoot(): string {
    this.helloService.sayHello('My name is getRoot');
    return 'Hello World!';
  }
  getHello(): string {
    return 'Hello World!';
  }
}
