import {Component} from "@angular/core"
import { TutorialStep } from "../models/TutorialStep";
import {ProductInfoService} from "../services/ProductInfoService";

export interface Chapter{
    title: string;
    steps: TutorialStep[]
}
@Component({
    moduleId: module.id,
    //moduleId: __moduleName,
    selector: "learn-page-ui",
    templateUrl: "../views/learn.html",
    styleUrls: ["../assets/styles/learn.scss"]
})

export class LearnComponent {
    images: Map<string,string>;
    chapters: Chapter[] = [];
  

    constructor(private prodInfoService: ProductInfoService){
        this.images = prodInfoService.imageUrlDict;
        
        prodInfoService.tutorial.forEach((steps, key) => {
            var chapter = <Chapter>{title: key, steps: steps }
            this.chapters.push(chapter);
        });
        // this.imgAddExhibits = prodInfoService.getImage('get-started.PNG');
        // this.imgZibbitBar = prodInfoService.getImage('get-started.PNG');

    }
}