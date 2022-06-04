//import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
export class AppConfig {

    private imagesPath: string;
  
    constructor() { 
        this.imagesPath = "/uploads";
    }

    public static get isDev(): boolean{
        var env = process.env.NODE_ENV || 'development';
        return env === 'development';
  
    }

    public getUploadsPath(){
        return this.imagesPath;
    }

    public getImageUrl(fileName){
        var imagesPath = this.getUploadsPath();
        var fullpath = imagesPath + '/' + fileName;
        return fullpath;
        
    }

}