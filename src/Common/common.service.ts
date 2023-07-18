import { Inject, Injectable, forwardRef } from "@nestjs/common";
import { CatsService } from "src/cats/cats.service";

@Injectable()
export class CommonService {
    
    //resolving circular dependency by forwardRef method
  constructor(
    @Inject(forwardRef(() => CatsService))
    private catsService: CatsService,
  ) {}
}