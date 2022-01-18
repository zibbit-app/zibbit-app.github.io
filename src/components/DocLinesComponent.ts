import {Component, Input} from "@angular/core"
import {ProductInfoService} from "../services/ProductInfoService";
import {Card} from '../models/Card'
import { max } from "rxjs-compat/operator/max";

@Component({
    moduleId: module.id,
    //moduleId: __moduleName,
    selector: "doc-lines-ui",
    templateUrl: "../views/docLines.html",
    styleUrls: ["../assets/styles/docLines.scss"]
})
export class DocLinesComponent {
    @Input() showTabs: boolean = true;
    @Input() showRibbon: boolean = true;
    @Input() selectedIconUrl: string;
    @Input() selectedIconPosition: number;

    iconUrls: string[] = []; 
  

    constructor(private prodInfoService: ProductInfoService){

    }
    
}