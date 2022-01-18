//import {Customer} from '../models/Customer'
import {Component} from "@angular/core"
import {ProductInfoService} from "../services/ProductInfoService";

@Component({
    moduleId: module.id,
    //moduleId: __moduleName,
    selector: "footer-ui",
    templateUrl: "../views/footer.html",
    styleUrls: ["../assets/styles/footer.scss"]
})
export class FooterComponent {
    constructor(private prodInfoService: ProductInfoService) {}
    public logoUrl: string;
    public email: string;
    public currentYear: string;
    ngOnInit() {
        this.currentYear = new Date().getFullYear().toString();
        this.setProps();
        //this.setCards();
    }
 
    private setProps(): void {
        this.logoUrl = this.prodInfoService.getLogoUrl();
        this.email = this.prodInfoService.getEmail();
    }
    //CurrentCustomer:Customer = new Customer();
}