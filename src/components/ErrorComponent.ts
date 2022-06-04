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



export enum ErrorType{
    Unknown,
    Forbidden,
    BadRequest
}

@Component({
    moduleId: module.id,
    //moduleId: __moduleName,
    selector: "plan-ui",
    templateUrl: "../views/error.html",
    styleUrls: ["../assets/styles/error.scss"]
})
export class ErrorComponent {
    public errorTitle: string; 
    private errorType: ErrorType;
    private errorMessage: string;

    constructor(private userService: UserService, private route: ActivatedRoute) { 
    }

    ngOnInit() {
        this.route.queryParamMap.subscribe(params => {
            let errorType = params.get('errorType');
            this.errorMessage = params.get('errorMessage') || null;

            this.errorType =  Number.parseInt(errorType) as ErrorType || ErrorType.Unknown;
            this.errorTitle = this.getErrorTitle(this.errorType);
          });
    }

    private getErrorTitle(type: ErrorType){
        switch(type){
            case ErrorType.BadRequest:
                return "Invalid Operation"
            case ErrorType.Forbidden:
                return "Forbidden";
            default:
                return "Unknown Error";
        }

    }
    
}
