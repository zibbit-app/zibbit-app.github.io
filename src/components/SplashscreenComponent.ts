import {Component, Input} from "@angular/core"
import {ProductInfoService} from "../services/ProductInfoService";

// import {Card} from '../models/Card'

@Component({
    moduleId: module.id,
    //moduleId: __moduleName,
    selector: "splashscreen-ui",
    templateUrl: "../views/splashscreen.html",
    styleUrls: ["../assets/styles/splashscreen.scss"]
})
export class SplashscreenComponent {
    @Input() size: string = "large";
    @Input() displayType: string = "block";

    constructor(productInfoService: ProductInfoService) {
        this.prodInfoService = productInfoService
    }
    private prodInfoService: ProductInfoService;
    public spinnerImgUrl: string;

    ngOnInit() {

        this.setSpinnerUrl();
    }


    //   @Input()
    //   set isVisible(isVisible: boolean) {
        
    //     console.log(isVisible);
    //     //this.setSplashscreenVisibility(isVisible);
    //   }

    private setSpinnerUrl(): void {
        this.spinnerImgUrl = this.prodInfoService.getSpinnerUrl();
    }
}