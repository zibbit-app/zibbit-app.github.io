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
    selector: "success-payment-ui",
    templateUrl: "../views/payment-cancel.html",
    styleUrls: ["../assets/styles/payment-cancel.scss"]
})
export class PaymentCancelComponent {
    constructor(private prodInfoService: ProductInfoService, private route: ActivatedRoute) { 
    }
    public plans: Plan[] = [];
    public prices: Price[] = [];
    public canCheckout: boolean;

    private config: AppConfig;
    private selectedPlanId: string;
    private selectedPriceId: string;




    ngOnInit() {
        this.config = new AppConfig;
        // this.route.paramMap.subscribe(params => {
        //     let planId = params.get('planId');
        //   });
    }
}
