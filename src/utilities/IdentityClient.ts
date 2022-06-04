import { PermissionRequest } from './../models/PermissionRequest';
import { PermissionTicket } from './../models/PermissionTicket';
import { User } from './../models/User';
import { Tenant } from './../models/Tenant';
import { AuthTokenInfo } from './../models/AuthTokenInfo';
import { AppConfig } from './AppConfig';
import axios from 'axios';

import { Injectable } from '@angular/core';
import { bind } from '@angular/core/src/render3/instructions';
import { Plan } from 'models/Plan';
import { Price } from 'models/Price';
import { TokenUtil } from './TokenUtil';

@Injectable({
  providedIn: 'root',
})
export class IdentityClient {
    private baseUrlDev: string = "https://localhost:5001";
    private baseUrlProd: string = "https://zibbit-publish.azurewebsites.net/";
    private baseUrl: string;
  
    constructor() {

        this.baseUrl = AppConfig.isDev ? this.baseUrlDev : this.baseUrlProd;
    }

    public get refreshUrl(): string{
        return this.baseUrl + "/api/token/refresh";

    } 

    public refreshAsync(info: AuthTokenInfo): Promise<any> {
        var url = this.baseUrl + "/api/token/refresh";
        var bodyFormData = new FormData();
        bodyFormData.append("accessToken", info.accessToken)
        bodyFormData.append("refreshToken", info.refreshToken)

        return axios.post(url, bodyFormData)
        .then(function (response) {
            console.log("refresh", response);
            var info: AuthTokenInfo = response.data;
            return info;

        })
    }

    public async getPermissionTicketAsync(request: PermissionRequest): Promise<PermissionTicket> {
        var url = this.baseUrl + `/api/resource/permission-ticket`;
        return axios.post(url, request)
        .then(function (response) {
            var ticket: PermissionTicket = response.data;
            return ticket;
        })
    }

    public async getUsersByOrgAsync(orgId: string): Promise<User[]> {
        var url = this.baseUrl + `/api/user/tenant/${orgId}`;
        return axios.get(url)
        .then(function (response) {
            var users: User[] = response.data;
            return users;
        })
    }



    public updateOrganizationDetailsAsync(org: Tenant): Promise<any> {
        var url = this.baseUrl + `/api/tenant/edit/${org.id}`;
        return axios.post(url, org)
        .then(function (response) {
            return response.status === 200;
        })
    }

    public newOrganizationRegKeyAsync(orgId: string): Promise<string> {
        var url = this.baseUrl + `/api/tenant/${orgId}/regKey/new`;
        return axios.get(url)
        .then(function (response) {
            var regKey: string = response.data;
            return regKey;
        })
    }

    public getOrganizationRegKeyAsync(orgId: string): Promise<string> {
        var url = this.baseUrl + `/api/tenant/${orgId}/regKey`;
        return axios.get(url)
        .then(function (response) {
            var regKey: string = response.data;
            return regKey;
        })
    }


    public getOrganizationAsync(orgId: string): Promise<Tenant> {
        var url = this.baseUrl + `/api/tenant/${orgId}`;
        return axios.get(url)
        .then(function (response) {
            var tenant: Tenant = response.data;
            return tenant;
        })
    }

    public getOrganizationsByUserAsync(userId: string): Promise<Tenant[]> {
        var url = this.baseUrl + `/api/tenant/access-granted/${userId}`;
        return axios.get(url)
        .then(function (response) {
            console.log("list orgs", response);
            var tenants: Tenant[] = response.data;
            return tenants;
            //return checkoutUrl;
        })
    }


    public revokeAccessToOrganizationAsync(orgId: string, userId: string): Promise<boolean> {
        var bodyFormData = new FormData();
        bodyFormData.append("tenantId", orgId);
        bodyFormData.append("userId", userId);
        var url = this.baseUrl + "/api/tenant/revoke-access";
        return axios.post(url, bodyFormData)
        .then(function (response) {
            console.log("revoke access", response);
            return response.status == 200;
            //return checkoutUrl;
        })
    }

    public requestAccessToOrganizationAsync(regKey: string): Promise<boolean> {
        var bodyFormData = new FormData();
        bodyFormData.append("regKey", regKey);
        var url = this.baseUrl + "/api/tenant/request-access";
        return axios.post(url, bodyFormData)
        .then(function (response) {
            console.log("request access", response);
            return response.status == 200;
            //return checkoutUrl;
        })
    }

    public createOrganizationAsync(orgName: string): Promise<boolean> {
        var bodyFormData = new FormData();
        bodyFormData.append("TenantName", orgName)
        var url = this.baseUrl + "/api/tenant/register";
        return axios.post(url, bodyFormData)
        .then(function (response) {
            return response.status == 200;
            //return checkoutUrl;
        })
    }

    public getUserAsync(userId: string): Promise<User> {
        var url = this.baseUrl + `/api/user/${userId}`;
        return axios.get(url)
        .then(function (response) {
            var user: User = response.data;
            return user;
        })
    }

    public registerAsync(username: string, password: string, regKey: string = null): Promise<boolean> {
        var bodyFormData = new FormData();
        bodyFormData.append("username", username)
        bodyFormData.append("password", password)
        bodyFormData.append("registrationKey", regKey)
        var url = this.baseUrl + "/api/user/register";
        return axios.post(url, bodyFormData)
        .then(function (response) {
            return response.status == 200;
            //return checkoutUrl;
        })
    }

    public changePasswordAsync(password: string): Promise<boolean> {
        var bodyFormData = new FormData();
        bodyFormData.append("password", password)
        var url = this.baseUrl + "/api/user/change-password";
        return axios.post(url, bodyFormData)
        .then(function (response) {
            return response.status == 200;
            //return checkoutUrl;
        })
    }

    public getAuthTokenInfo(username: string, password: string): Promise<AuthTokenInfo> {
        var bodyFormData = new FormData();
        bodyFormData.append("username", username)
        bodyFormData.append("password", password)
        var url = this.baseUrl + "/api/authentication/login";
        return axios.post(url, bodyFormData)
        .then(function (response) {
            var info: AuthTokenInfo = response.data;
            return info;
        });
    }


    public refreshAuthAsync(authInfo: AuthTokenInfo): Promise<AuthTokenInfo> {
        var bodyFormData = new FormData();
        bodyFormData.append("accessToken", authInfo.accessToken)
        bodyFormData.append("refreshToken", authInfo.refreshToken)
        var url = this.baseUrl + "/api/token/refresh";
        return axios.post(url, bodyFormData)
        .then(function (response) {
            var info = response.data;
            console.log("refresh", response);
            console.log("refresh info", info);

            return info;
            //return checkoutUrl;
        })
    }

    public logoutAsync(): Promise<any> {
        var url = this.baseUrl + "/api/authentication/logout";
        return axios.get(url)
        .then(function (response) {
            //return token;
        })
    }
}