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
    templateUrl: "../views/register.html",
    styleUrls: ["../assets/styles/register.scss"]
})
export class RegisterComponent {
    constructor(private userService: UserService, private router: Router) { 
    }
    private returnUrl: string = "/account";
    public username: string = "";
    public password: string = "";
    public canSubmit: boolean = false;
    public isTenantMember: boolean = false;
    public regKey: string = "";


    private config: AppConfig;

    ngOnInit() {
        this.config = new AppConfig;
        this.canSubmit = true;

    } 

    async onSubmitAsync(){
        this.canSubmit = false;
        //this.identityClient.GetAccessToken(this.username, this.password);
        var result = await this.userService.registerAsync(this.username, this.password, this.regKey);
        if(result)
            this.router.navigate([this.returnUrl]);

        
        this.canSubmit = true;
    }
    
}
