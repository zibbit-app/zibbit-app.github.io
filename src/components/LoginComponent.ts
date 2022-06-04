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
    templateUrl: "../views/login.html",
    styleUrls: ["../assets/styles/login.scss"]
})
export class LoginComponent {

    public username: string = "";
    public password: string = "";
    public canSubmit: boolean = false;
    private returnUrl: string = "/account";

    constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { 
    }

    private config: AppConfig;

    ngOnInit() {
        this.config = new AppConfig;
        this.canSubmit = true;

        this.route.queryParamMap.subscribe(params => {
            let url = params.get('redirectUrl') || this.returnUrl;
        });
    }

    async onSubmitAsync(){
        this.canSubmit = false;
        var result = await this.userService.loginAsync(this.username, this.password).catch(err => {
            alert("The email or password is incorrect");
        });
        
        if(result)
            this.router.navigate([this.returnUrl]);
        
        this.canSubmit = true;
    }
    
}
