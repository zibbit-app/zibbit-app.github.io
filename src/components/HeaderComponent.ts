//import {Customer} from '../models/Customer'
import {Component, Input} from "@angular/core";
import {ProductInfoService} from "../services/ProductInfoService";


@Component({
    moduleId: module.id,
    //moduleId: __moduleName,
    selector: "header-ui",
    templateUrl: "../views/header.html",
    styleUrls: ["../assets/styles/header.scss"]
})
export class HeaderComponent {
    constructor(private prodInfoService: ProductInfoService) {
    }
    public logoUrl: string;
    @Input() isMobileMenuVisibility: boolean = false;
    @Input() hideLogo: boolean = false;


    get mobileWrapperClass(): string{
        var strClass = "btn-menu btn btn-primary " + (this.isMobileMenuVisibility ? "d-block" : "d-block d-md-none");
        return strClass;
    }

    get desktopWrapperClass(): string{
        var strClass = "fullscreen-menu-wrapper " + (this.isMobileMenuVisibility ? "d-none" : "d-none d-md-block");
        return strClass;
    }

    private menuClickHandler(): void {
        var menu = document.getElementById('collapseMobileMenu');
        menu.classList.remove("show");
    }

    ngOnInit() {
        this.setLogo();
    }
 
    private setLogo(): void {
        this.logoUrl = this.prodInfoService.getLogoUrl();
    }
    
}