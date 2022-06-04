import { ModalButton } from './../models/ModalButton';
import { IdentityClient } from './../utilities/IdentityClient';
import {Component, Input} from "@angular/core"
import { AppConfig } from '../utilities/AppConfig';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import {Card} from "../models/Card"
import {ProductInfoService} from "../services/ProductInfoService";
import { Benefit } from "../models/Benefit";
import { Plan } from "models/Plan";
import { ActivatedRoute, Router } from "@angular/router";
import { Price } from "models/Price";
import { UserService } from '../services/UserService';
//declare var bootstrap: any;
declare var $: any;

@Component({
    moduleId: module.id,
    //moduleId: __moduleName,
    selector: "modal-ui",
    templateUrl: "../views/modal.html",
    styleUrls: ["../assets/styles/modal.scss"]
})
export class ModalComponent {
    @Input() public title: string;
    @Input() public buttons: ModalButton[];
    @Input() public show: boolean;
    @Input() public onCloseCallback: Function;

    // constructor(private userService: UserService, private router: Router) { 
    // }
    // private returnUrl: string = "/account";
    // public username: string = "";
    // public password: string = "";
    // public canSubmit: boolean = false;
    // public isTenantMember: boolean = false;
    // public regKey: string = "";


    //private config: AppConfig;

    ngOnChanges() {
        console.log("modal called", this.show)
        // var ele = document.getElementById('exampleModal');
        $('#exampleModal').modal('show');
        //var myModal = $(ele).modal("") //bootstrap.Modal.getOrCreateInstance(ele);
        //var myModal = new bootstrap.Modal(ele);
        if(this.show)
            $('#exampleModal').modal('show');

            //myModal.show()
        else
        {
            $('#exampleModal').modal('hide');

            console.log("hide");
            // myModal.hide()

        }

        //this.config = new AppConfig;
        // this.canSubmit = true;

    }

    onClose(){
        if(this.onCloseCallback)
            this.onCloseCallback();
    }






    // buttonHandler(btnIndex: number){
    //     let btn = 
    // }

    // async onSubmitAsync(){
    //     this.canSubmit = false;
    //     //this.identityClient.GetAccessToken(this.username, this.password);
    //     var result = await this.userService.registerAsync(this.username, this.password, this.regKey);
    //     if(result)
    //         this.router.navigate([this.returnUrl]);

        
    //     this.canSubmit = true;
    // }
    
}
