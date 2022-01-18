import 'babel-polyfill';
import 'core-js/proposals/reflect-metadata';
import 'zone.js/dist/zone';
import {Bootstrapper} from './Bootstrapper';
import { enableProdMode } from '@angular/core';
if(process.env.ENV == 'production'){
    enableProdMode();
}
Bootstrapper.initialize();
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MainModuleLibrary } from './modules/MainModuleLibrary';
import {ProductInfoService} from "./services/ProductInfoService";
// var service = Bootstrapper.getInstanceByType(ProductInfoService);
const platform = platformBrowserDynamic();
platform.bootstrapModule(MainModuleLibrary);
