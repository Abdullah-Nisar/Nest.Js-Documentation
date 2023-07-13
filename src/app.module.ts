import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsModule } from './cats/cats.module';
import { CatsService } from './cats/cats.service';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './http-exception.filter';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [CatsModule],
  controllers: [CatsController],
  providers: [CatsService],

  //Module Exception Filters
  // providers: [
  //   {
  //     provide: APP_FILTER,
  //     useClass: HttpExceptionFilter
  //   }]

  //Module Guards
  // providers: [
  //   {
  //     provide: APP_GUARD, 
  //     useClass: RolesGuard
  //   }
  // ]
})
export class AppModule {}
