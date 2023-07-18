import { Inject, Injectable, Scope } from "@nestjs/common";
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';
import {ConfigModuleOptions, EnvConfig} from './interfaces';
import { MODULE_OPTIONS_TOKEN } from "./config.module-definition";


//defining scope of the Injection (more like scope of the provider)
@Injectable({scope: Scope.REQUEST})


export class ConfigService{
    private readonly envConfig: EnvConfig;

    constructor(@Inject(MODULE_OPTIONS_TOKEN) private options: ConfigModuleOptions){
        const filePath = `${process.env.NODE_ENV || 'development'}.env`;
        const envFile = path.resolve(__dirname, '../../', options.folder, filePath);
        this.envConfig = dotenv.parse(fs.readFileSync(envFile));
    }
    
    get(key: string): string{
        return this.envConfig[key];
    }
}