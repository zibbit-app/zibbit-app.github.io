import {Component, Input} from "@angular/core"
import {LogoType, ProductInfoService} from "../services/ProductInfoService";
@Component({
    moduleId: module.id,
    //moduleId: __moduleName,
    selector: "logo-ui",
    templateUrl: "../views/logo.html",
    styleUrls: ["../assets/styles/logo.scss"]
})
export class LogoComponent {
    @Input() type: LogoType = LogoType.Normal;
    @Input() hideText: boolean = false;

 
    get logoUrl() {
        return this.prodInfoService.getLogoUrl(this.type);
    }

    get ShowText(){
        return !this.hideText && this.type !== LogoType.WithText;
    }

    constructor(private prodInfoService: ProductInfoService) {
    }
    
}