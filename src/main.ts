import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './http-exception.filter';
import { AllExceptionsFilter } from './all-exceptions.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalFilters(new HttpExceptionFilter());

  // Global Exception Filters
  // const { httpAdapterHost } = app.get(HttpAdapterHost);
  // app.useGlobalFilters(new AllExceptionsFilter( httpAdapterHost));

  //Global Guards
  // app.useGlobalGuards(new RolesGuard());

  await app.listen(3000);
}
bootstrap();
