import { AppConfig } from './AppConfig';
import axios from 'axios';

import { Injectable } from '@angular/core';
import { bind } from '@angular/core/src/render3/instructions';
import { Plan } from 'models/Plan';
import { Price } from 'models/Price';

@Injectable({
  providedIn: 'root',
})
export class PlansClient {
    private baseUrlDev: string = "https://localhost:5001";
    private baseUrlProd: string = "https://zibbit-publish.azurewebsites.net/";

    // private baseUrlDev: string = "https://localhost:44324";
    // private baseUrlProd: string = "https://zibbit-publish.azurewebsites.net";
    private baseUrl: string;
  
    constructor() {

        this.baseUrl = (AppConfig.isDev ? this.baseUrlDev : this.baseUrlProd) + "/api/plans";
    }


    public getPlanAsync(customerId: string): Promise<Plan> {
        var url = this.baseUrl + "/" + customerId;
        return axios.get(url)
        .then(function (response) {
            var connections: Plan = response.data;
            return connections;
        })

    }

    public getPlansAsync(): Promise<Plan[]> {
        var url = this.baseUrl + "/plans";
        return axios.get(url)
        .then(function (response) {
            var connections: Plan[] = response.data;
            return connections;
        })

    }

    public getPrices(planId: string): Promise<Price[]> {
        var url = this.baseUrl + "/prices/" + planId;
        return axios.get(url)
        .then(function (response) {
            var connections: Price[] = response.data;
            return connections;
        })
    }

    public getCustomerPortalUrlAsync(): Promise<string> {
        var url = this.baseUrl + "/customer-portal";
        return axios.get(url)
        .then(function (response) {
            console.log("custom portal resonse", response);
            return response.data;
        })
    }



    public createCheckoutSession(priceId: string): Promise<string> {
        var bodyFormData = new FormData();
        //bodyFormData.append("userId", userId);
        bodyFormData.append("priceId", priceId)
        var url = this.baseUrl + "/payment";
        return axios.post(url, bodyFormData)
        .then(function (response) {
            var checkoutUrl = response.data;
            console.log("url", checkoutUrl);
            return checkoutUrl;
        })
    }
}