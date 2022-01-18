import {Component, Input} from "@angular/core"
import {ProductInfoService} from "../services/ProductInfoService";
import {Card} from '../models/Card'

@Component({
    moduleId: module.id,
    //moduleId: __moduleName,
    selector: "logo-ui",
    templateUrl: "../views/logo.html",
    styleUrls: ["../assets/styles/logo.scss"]
})
export class LogoComponent {

    get logoUrl() {
        return this.prodInfoService.getLogoUrl();
    }
    constructor(private prodInfoService: ProductInfoService) {
    }
    //card: Card = new Card('test', 'test description');
    
}