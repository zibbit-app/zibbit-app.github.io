import { userInfo } from 'os';
import { UserService } from './../services/UserService';
import {Component} from "@angular/core"
import { AppConfig } from '../utilities/AppConfig';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import {Card} from "../models/Card"
import {ProductInfoService} from "../services/ProductInfoService";
import { Benefit } from "../models/Benefit";
import { Plan } from "models/Plan";
import { ActivatedRoute } from "@angular/router";
import { Price } from "models/Price";


@Component({
    moduleId: module.id,
    //moduleId: __moduleName,
    selector: "plan-ui",
    templateUrl: "../views/checkout.html",
    styleUrls: ["../assets/styles/checkout.scss"]
})
export class CheckoutComponent {
    constructor(private userService: UserService, private prodInfoService: ProductInfoService, private route: ActivatedRoute) { 
    }
    public plans: Plan[] = [];
    public prices: Price[] = [];
    public canCheckout: boolean;
    public registerOrg: boolean;
    public orgName: string;

    private config: AppConfig;
    private selectedPlanId: string;
    private selectedPriceId: string;

    private async setPlansAsync(planId: string){
        this.plans = await this.prodInfoService.getPlans();
        this.selectedPlanId = planId || this.plans[0].id;
        this.setPriceAsync(this.selectedPlanId);

    }

    private async setPriceAsync(planId: string){
        this.canCheckout = false;
        this.prices = await this.prodInfoService.getPrices(planId);
        this.selectedPriceId = this.prices[0].id;
        this.canCheckout = true;
    }


    ngOnInit() {
        this.config = new AppConfig;
        this.route.paramMap.subscribe(params => {
            let planId = params.get('planId');
            this.setPlansAsync(planId);
          });
    }

    onPlanChange(planId: string){
        this.selectedPlanId = planId;
        this.setPriceAsync(planId);
    }

    onPriceChange(priceId: string){
        this.selectedPriceId = priceId;
    }

    async onCheckout(){
        //var orgName = this.registerOrg && this.orgName ? this.orgName : null; 
        //await this.userService.registerOrganizationAsync(this.orgName);
        this.getCheckoutUrlAsync()
    }

    private async getCheckoutUrlAsync(){
        var url = await this.prodInfoService.getSessions(this.selectedPriceId);
        window.location.href = url;
    }



 
    
}
