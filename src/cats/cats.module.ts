import { Module, forwardRef } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { CommonModule } from 'src/Common/common.module';

@Module({
  //resolving circular dependency by modular forwardRef method
  imports: [forwardRef(() => CommonModule)],
  controllers: [CatsController],
  providers: [CatsService]
})
export class CatsModule {}
