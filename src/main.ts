import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './http-exception.filter';
import { AllExceptionsFilter } from './all-exceptions.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalFilters(new HttpExceptionFilter());

  // const { httpAdapterHost } = app.get(HttpAdapterHost);
  // app.useGlobalFilters(new AllExceptionsFilter( httpAdapterHost));
  await app.listen(3000);
}
bootstrap();
