import { ConfigurableModuleBuilder } from "@nestjs/common/module-utils";
import { ConfigModuleOptions } from "./interfaces";

//method: register (To be used multiple times in the application)
// export const { ConfigurableModuleClass,  MODULE_OPTIONS_TOKEN} =
//  new ConfigurableModuleBuilder<ConfigModuleOptions>().build();

// method: forRoot (To be used only onces in the application)
//  export const { ConfigurableModuleClass,  MODULE_OPTIONS_TOKEN} =
//  new ConfigurableModuleBuilder<ConfigModuleOptions>().setClassMethodName('forRoot').build();

// changing the naming convention to instruct ConfigurableModuleBuilder to expect a different method name.
//  export const { ConfigurableModuleClass: MODULE_OPTIONS_TOKEN} =
//   new ConfigurableModuleBuilder<ConfigModuleOptions>().setFactoryMethodName('createCOnfigOptions').build();

//edge cases
export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN} = new ConfigurableModuleBuilder<ConfigModuleOptions>()
.setExtras({isGlobal: true}, (definition, extras) => ({
    ...definition,
    global: extras.isGlobal
})).build();