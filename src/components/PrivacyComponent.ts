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
    selector: "privacy-page-ui",
    templateUrl: "../views/privacy.html",
    styleUrls: ["../assets/styles/privacy.scss"]
})

export class PrivacyComponent {
    images: Map<string,string>;
  

    constructor(private prodInfoService: ProductInfoService){
        this.images = prodInfoService.imageUrlDict;
        

        // this.imgAddExhibits = prodInfoService.getImage('get-started.PNG');
        // this.imgZibbitBar = prodInfoService.getImage('get-started.PNG');

    }
}