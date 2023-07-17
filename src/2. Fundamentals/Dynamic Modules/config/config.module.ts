import { DynamicModule, Module } from "@nestjs/common";
import { ConfigService } from "./config.service";
import { ConfigurableModuleClass } from "./config.module-definition";

// export interface ConfigModuleOptions {
//     folder: string;
// }

// @Module({})
// export class ConfigModule {
//     static register(options: Record<string, any>): DynamicModule {
//         return {
//             module: ConfigModule,
//             providers: [{provide: 'CONFIG_OPTIONS', useValue: options}, ConfigService],
//             exports: [ConfigService]
//         };
//     }
// }

@Module({
    imports: [
        // ConfigModule.register({ folder: './config' }),
        // ConfigModule.forRoot({folder: './config'})
        // ConfigModule.registerAsync({ useFactory: () => ({ folder: './config' }) }),
    ],
    providers: [ConfigService],
    exports: [ConfigService]
})
export class ConfigModule extends ConfigurableModuleClass{}