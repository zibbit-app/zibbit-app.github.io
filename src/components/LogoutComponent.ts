import { IdentityClient } from './../utilities/IdentityClient';
import {Component} from "@angular/core"
import { AppConfig } from '../utilities/AppConfig';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import {Card} from "../models/Card"
import {ProductInfoService} from "../services/ProductInfoService";
import { Benefit } from "../models/Benefit";
import { Plan } from "models/Plan";
import { ActivatedRoute, Router } from "@angular/router";
import { Price } from "models/Price";
import { UserService } from '../services/UserService';


@Component({
    moduleId: module.id,
    //moduleId: __moduleName,
    selector: "plan-ui",
    templateUrl: "../views/logout.html",
    styleUrls: ["../assets/styles/logout.scss"]
})
export class LogoutComponent {

    private returnUrl: string = "/home";
    private canSubmit: boolean;
    private config: AppConfig;


    constructor(private userService: UserService, private router: Router) { 
    }

    

    ngOnInit() {
        this.config = new AppConfig;
        this.canSubmit = true;

    } 

    async onSubmitAsync(){
        this.canSubmit = false;
        var result = await this.userService.logoutAsync();
        this.router.navigate([this.returnUrl]);
        
        this.canSubmit = true;
    }
    
}
