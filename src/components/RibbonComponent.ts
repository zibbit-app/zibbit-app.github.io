import {Component, Input} from "@angular/core"
import {ProductInfoService} from "../services/ProductInfoService";
import {Card} from '../models/Card'
import { max } from "rxjs-compat/operator/max";

@Component({
    moduleId: module.id,
    //moduleId: __moduleName,
    selector: "ribbon-ui",
    templateUrl: "../views/ribbon.html",
    styleUrls: ["../assets/styles/ribbon.scss"]
})
export class RibbonComponent {
    @Input() docTitle: string = "";
    @Input() showTabs: boolean = true;
    @Input() showRibbon: boolean = true;
    @Input() selectedIconUrl: string;
    @Input() selectedIconPosition: number;

    iconUrls: string[] = []; 
  

    constructor(private prodInfoService: ProductInfoService){
        var anyIcon = prodInfoService.imageUrlDict.get('icon-folder');

        this.selectedIconPosition = 1;
        this.selectedIconUrl = anyIcon;
        // var imgs: string[] = [];
        for(var i = 0; i < 4; i++) {
            this.iconUrls.push(anyIcon);
        }
    }

    ngOnChanges() {
        var imgs = this.iconUrls;
        imgs[this.selectedIconPosition] = this.selectedIconUrl;
        this.iconUrls = imgs;
        
    }
    
}