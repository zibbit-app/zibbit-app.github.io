import { ModalButton } from './../models/ModalButton';
import { AppScopes, ScopeUtils } from './../models/PermissionScopes';
import { ResourceType } from './../models/ResourceType';
import { PermissionRequest } from './../models/PermissionRequest';
import { PermissionTicket } from './../models/PermissionTicket';
import { Tenant } from './../models/Tenant';
import { TenantService } from './../services/TenantService';
import { UserService } from './../services/UserService';
import { IdentityClient } from './../utilities/IdentityClient';
import {Component} from "@angular/core"
import { AppConfig } from '../utilities/AppConfig';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import {Card} from "../models/Card"
import {ProductInfoService} from "../services/ProductInfoService";
import { Benefit } from "../models/Benefit";
import { Plan } from "models/Plan";
import { ActivatedRoute } from "@angular/router";
import { Price } from "models/Price";

export enum ViewType{
    Dashboard,
    Profile,
    Organizaions,
    Billing,
}


@Component({
    moduleId: module.id,
    //moduleId: __moduleName,
    selector: "plan-ui",
    templateUrl: "../views/account.html",
    styleUrls: ["../assets/styles/account.scss"]
})

export class AccountComponent {
    constructor(private tenantService: TenantService, private UserService: UserService, private route: ActivatedRoute) { 
    }
    public ticket: PermissionTicket;
    public userId: string;
    public Nav = ViewType;
    public viewType: ViewType;
    public password: string = "";
    public confirmPassword: string = "";
    public canSubmitProfile: boolean = false;
    public canManageBilling: boolean = false;
    // public isActiveCustomer: boolean = !this.UserService.isActiveCustomer();
    public enterRegKey: boolean = false;
    public regKey: string = null;
    public username: string;

    public organizations: Tenant[] = [];
    public ownerOrganization: Tenant;
    public plan: Plan;
    public addOrgModalButtons: ModalButton[] = [new ModalButton("Request Access", () => this.handleRegKeySubmit())]
    public showModal: boolean = false;

    async ngOnInit() {
        this.canSubmitProfile = true;

        this.route.queryParamMap.subscribe(params => {
            let errorType = params.get('viewType');
            this.viewType =  Number.parseInt(errorType) as ViewType || ViewType.Dashboard;
            // this.viewType = this.getErrorTitle(this.errorType);
          });

        
        this.userId = this.UserService.getActiveUserId();

        this.ticket = await this.getPermissionTicketAsync(this.userId);

        this.canManageBilling = ScopeUtils.containsScope(this.ticket, AppScopes.userBilling.Manage); 


        
        var user = await this.UserService.getUserAsync(this.userId);
        this.username = user.userName;

        this.organizations = await this.tenantService.getOrganizationsByUserAsync(this.userId);
        this.ownerOrganization = this.organizations.find(t => t.ownerId == user.id);
        if(this.ownerOrganization)
            this.plan = await this.tenantService.getOrganizationPlanAsyn(this.ownerOrganization.customerId);


        this.canSubmitProfile = true;
    }

    private async getPermissionTicketAsync(userId: string): Promise<PermissionTicket>{
        var request = new PermissionRequest();
        request.RequestingUserId = this.UserService.getActiveUserId();
        request.resourceOwnerId = userId;
        request.resourceType = ResourceType.UserBilling;
        return await this.UserService.getPermissionTicketAsync(request) as PermissionTicket;
    }

    onModalClose = () => {
        console.log("close called", this.showModal);
        this.regKey = null;
        this.showModal = false;
    }

    addNewOrg(){
        this.showModal = true;
    }

    onNav(type: ViewType){
        this.viewType = type;
    }

    

    // requestAccess(){
    //     let el = document.getElementById("myModal").;
    //     el.scrollIntoView({behavior:"smooth"});

    //     // $('#myModal').on('shown.bs.modal', function () {
    //     //     $('#myInput').trigger('focus')
    //     //   })
    // }



    async onProfileSubmitAsync(){
        if(this.password == null || this.password == ""){
            alert("Password can't be empty");
            return;

        }
        if(this.password != this.confirmPassword){
            alert("make sure the password and confirmation password match")
            return;
        }
        this.canSubmitProfile = false;

        var result = await this.UserService.changePasswordAsync(this.password);
        this.password = null;
        this.confirmPassword = null;

        if(!result)
            alert("Update password failed");
        else
            this.viewType = ViewType.Dashboard;

        this.canSubmitProfile = true;


    }

    async onBillingClickedAsync(){
        var url = await this.UserService.GetCustomerPortal();
        window.location.href = url;
    }

    async handleRegKeySubmit(){
        if(this.regKey != null){
            var result = await this.tenantService.requestAccessToOrganizationAsync(this.regKey).catch((err) => {
                alert("Invalid registration key")
                return;

            });
            
            if(result){
                this.enterRegKey = false;
                this.organizations = await this.tenantService.getOrganizationsByUserAsync(this.userId);
                this.regKey = null;
                this.showModal = false;
            }

        }

    }

}
