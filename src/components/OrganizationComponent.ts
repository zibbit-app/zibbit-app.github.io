import { ForbiddenError } from './../errors/ApplicationErrors';
import { User } from './../models/User';
import { AppScopes, ScopeUtils } from './../models/PermissionScopes';
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
import { Plan } from "../models/Plan";
import { ActivatedRoute, Router } from "@angular/router";
import { Price } from "models/Price";
import { ResourceType } from '../models/ResourceType';
import { stringify } from '@angular/core/src/util';

enum ViewType{
    Users,
    Details,
    // Templates,
    Settings,
}


@Component({
    moduleId: module.id,
    //moduleId: __moduleName,
    selector: "plan-ui",
    templateUrl: "../views/organization.html",
    styleUrls: ["../assets/styles/organization.scss"]
})

export class OrganizationComponent {
    constructor(private tenantService: TenantService, private UserService: UserService, private router: Router, private route: ActivatedRoute) { 
    }
    public userId: string;
    public Nav = ViewType;
    public viewType: ViewType = ViewType.Users;
    public password: string = "";
    public confirmPassword: string = "";
    public canSubmitDetails: boolean = false;
    public isActiveCustomer: boolean = this.UserService.isActiveCustomer();
    public enterRegKey: boolean = false;
    public organization: Tenant;
    public regKey: string = null;
    public orgName: string;
    public ticket: PermissionTicket;
    public canWrite: boolean = false;
    public users: User[] = [];
    public plan: Plan = Plan.empty();


    async ngOnInit() {
        console.log(this.plan);
        this.canSubmitDetails = true;

        this.route.paramMap.subscribe(params => {
            let orgId = params.get('orgId');
            this.setOrgAsync(orgId);
          });

        this.canSubmitDetails = true;
    }

    private async setOrgAsync(orgId: string){
        this.ticket = await this.getPermissionTicketAsync(orgId);
        if(this.ticket.permissions.length == 0)
            throw new ForbiddenError("resource is Forbidden");
        
        this.canWrite = ScopeUtils.containsScope(this.ticket, AppScopes.orgAccount.Write);
        this.organization = await this.tenantService.getOrganizationById(orgId);
        this.orgName = this.organization.name;
        this.plan = await this.tenantService.getOrganizationPlanAsyn(this.organization.customerId);
        this.users = await this.UserService.getUsersByOrgIdAsync(this.organization.id);
        this.regKey = await this.tenantService.getOrganizationRegKey(orgId);

    }

    private async getPermissionTicketAsync(orgId: string): Promise<PermissionTicket>{
        var request = new PermissionRequest();
        request.RequestingUserId = this.UserService.getActiveUserId();
        request.resourceOwnerId = orgId;
        request.resourceType = ResourceType.TenantAccount;
        return await this.UserService.getPermissionTicketAsync(request) as PermissionTicket;
    }


    async onNav(type: ViewType){
        this.viewType = type;
        switch(type){
            case ViewType.Users: {
                this.users = await this.UserService.getUsersByOrgIdAsync(this.organization.id);
            }
        }
    }
    

    async onSettingsSubmitAsync(){
        this.canSubmitDetails = false;

        this.regKey = await this.tenantService.getNewOrganizationRegKey(this.organization.id);
        
        this.canSubmitDetails = true;
    }

    async onRevokeAccessAsync(user: User){
        if(confirm(`Are you sure you want revoke access for ${user.userName}` )){
            var result = await this.tenantService.revokeAccessToOrganizationAsync(this.organization.id, user.id);
            if(result)
            {
                if(this.UserService.getActiveUserId() == user.id)
                    this.router.navigate(["/account"]);
                else
                    this.users = await this.UserService.getUsersByOrgIdAsync(this.organization.id);


            }
        }
     
    }


    async onDetailsSubmitAsync(){
        this.canSubmitDetails = false;
        if(this.orgName == null){
            alert("The Organization name must be provided")
            return;
        }
        var copyOrg: Tenant = JSON.parse(JSON.stringify(this.organization));
        copyOrg.name = this.orgName;
        await this.tenantService.updateOrganizationDetailsAsyn(copyOrg);
        this.organization = await this.tenantService.getOrganizationById(this.organization.id);

        this.canSubmitDetails = true;
    }


    // async handleRegKeySubmit(){
    //     console.log("regkey",this.regKey);
    //     if(this.enterRegKey && this.regKey != null){
    //         var result = await this.tenantService.requestAccessToOrganizationAsync(this.regKey);
    //         if(result){
    //             this.regKey = null;
    //             this.enterRegKey = false;
    //             this.organizations = await this.tenantService.getOrganizationsByUserAsync(this.userId);

    //         }

    //     }

    // }

}
