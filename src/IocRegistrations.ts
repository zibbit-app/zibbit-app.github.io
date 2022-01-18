import {ModuleLoader} from "./ModuleLoader";
import {AwilixContainer, InjectionMode, asClass, Lifetime} from 'awilix';
// const isClass = require('is-class')

export class IocRegistrations {

    // public static register(container: AwilixContainer){
    //   this.loadServices(container);
    //   this.loadComponents(container);
    // }

    public static loadComponents(container: AwilixContainer){
      var ctx = require.context("./components");
      var moduleInfoCollection = ModuleLoader.getModulesByContext(ctx);
      moduleInfoCollection.forEach((info) => {
        var name = info["name"];
        var mod = info["mod"];
        
        var reg = {[name]: asClass(mod).singleton()};
        // components.push(info);
        container.register(reg);
      })
      return moduleInfoCollection;
      // components = moduleInfoCollection;

    }

    public static loadServices(container: AwilixContainer){
      var ctx = require.context("./services");
      var moduleInfoCollection = ModuleLoader.getModulesByContext(ctx);
      moduleInfoCollection.forEach((info) => {
        var name = info["name"];
        var mod = info["mod"];
        
        var reg = {[name]: asClass(mod).singleton()};
        container.register(reg);
      })
    }
      // const ctx = require.context('./services', true)
      // const path = require('path')
      // const container = createContainer()
// ctx.keys().forEach(key => {
//   const name = path.basename(key, ".ts");
//   var mod = ctx(key);
//   var classDef = mod[name];
  // var isClassCheck = isClass(classDef);
  // console.log("test key: " + key);
  // console.log("test filename: " + name);
  // console.log("test classDef: " + classDef);
  // console.log("test class: " + isClassCheck);

  // var reg = {[name]: asClass(classDef).singleton()};
  // // console.log("reg: " + JSON.stringify(reg));
  // container.register(reg);

}




// const ctx = require.context('./services', true)
// // const { createContainer } = require('awilix')
// const path = require('path')
// const container = createContainer()
// ctx.keys().forEach(key => {
//   const name = path.basename(key, ".ts");
//   var mod = ctx(key);
//   var classDef = mod[name];
  // var isClassCheck = isClass(classDef);
  // console.log("test key: " + key);
  // console.log("test filename: " + name);
  // console.log("test classDef: " + classDef);
  // console.log("test class: " + isClassCheck);

  // var reg = {[name]: asClass(classDef).singleton()};
  // // console.log("reg: " + JSON.stringify(reg));
  // container.register(reg);

// container.loadModules([
//   // Globs!
//   [
//     // To have different resolverOptions for specific modules.
//     'services/**/*.js',
//     {
//       register: asClass,
//       lifetime: Lifetime.SINGLETON
//     }
//   ],
// //   'services/**/*.js',
// //   'repositories/**/*.js'
// ], {
//         // We want to register `UserService` as `userService` -
//         // by default loaded modules are registered with the
//         // name of the file (minus the extension)
//         // formatName: 'camelCase',
//         // Apply resolver options to all modules.
//         resolverOptions: {
//             // We can give these auto-loaded modules
//             // the deal of a lifetime! (see what I did there?)
//             // By default it's `TRANSIENT`.
//             lifetime: Lifetime.SINGLETON,
//             // We can tell Awilix what to register everything as,
//             // instead of guessing. If omitted, will inspect the
//             // module to determinw what to register as.
//             register: asClass
//         }
//     }
// )

// We are now ready! We now have a userService, userRepository and emailService!
// var service = container.resolve('ProductInfoService');

// console.log(service);