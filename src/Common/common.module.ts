import { Module, forwardRef } from "@nestjs/common";
import { CatsModule } from "src/cats/cats.module";

@Module({
    //resolving circular dependency by modular forwardRef method
    imports: [forwardRef(() => CatsModule)],
  })
  export class CommonModule {}