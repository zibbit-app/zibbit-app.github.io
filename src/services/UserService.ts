import { PermissionRequest } from './../models/PermissionRequest';
import { PermissionTicket } from './../models/PermissionTicket';
import { User } from './../models/User';
import { CustomerStatus } from './../models/CustomerStatus';
import { TokenUtil } from './../utilities/TokenUtil';
import { IdentityClient } from './../utilities/IdentityClient';
import { PlansClient } from './../utilities/PlansClient';
import { Injectable } from '@angular/core';
import { AppConfig } from '../utilities/AppConfig';

import {Card} from '../models/Card';
import {Installer} from '../models/Installer';
import { promises } from 'fs';
import { Benefit } from '../models/Benefit';
import { TutorialStep } from '../models/TutorialStep';
import { Plan } from 'models/Plan';
import { Price } from 'models/Price';

const jwt = require('jsonwebtoken');


@Injectable({
  providedIn: 'root',
})
export class UserService {
    private tokenUtil: TokenUtil = new TokenUtil();
    private authClient: IdentityClient;
    private plansClient: PlansClient;
    private config: AppConfig;


  
    constructor(authClient: IdentityClient, plansClient: PlansClient) {
      this.authClient = authClient;
      this.plansClient = plansClient;
    }


    public async getPermissionTicketAsync(request: PermissionRequest): Promise<PermissionTicket>{
      var ticket = await this.authClient.getPermissionTicketAsync(request);
      return ticket;
    }

    public async getUserAsync(userId: string): Promise<User>{
      var users = await this.authClient.getUserAsync(userId);
      return users;
    }

    public async getUsersByOrgIdAsync(orgId: string): Promise<User[]>{
      var users = await this.authClient.getUsersByOrgAsync(orgId);
      return users;
    }



    public async changePasswordAsync(password: string): Promise<boolean>{
      var result = await this.authClient.changePasswordAsync(password);
      return result;
    }


    public async registerAsync(username: string, password: string, regKey: string): Promise<boolean>{
      var result = await this.authClient.registerAsync(username, password, regKey);
      if(result)
        await this.loginAsync(username, password);
      return result;
    }

    public async loginAsync(username: string, password: string, redirectUrl: string = null): Promise<boolean>{
      var authInfo = await this.authClient.getAuthTokenInfo(username, password);
      this.tokenUtil.setAuthInfo(authInfo)
      return authInfo != null;
    }

    public async logoutAsync(): Promise<any>{
      try{
        await this.authClient.logoutAsync();

      }
      finally{
        this.tokenUtil.setAuthInfo(null);

      }


    }

    public async authRefreshAsync(): Promise<boolean>{
      var currentInfo = this.tokenUtil.getAuthInfo();
      this.tokenUtil.setAuthInfo(null); // prevents refresh loop
      var info = await this.authClient.refreshAsync(currentInfo);
      this.tokenUtil.setAuthInfo(info);
      return info != null;
    }

    public async GetCustomerPortal(): Promise<string>{
      var url = await this.plansClient.getCustomerPortalUrlAsync();
      return url;
    }

    // public SetAuthenticated(token: string): void {
    //   window.localStorage.setItem(this.tokenKeyName,this.tokenKeyName)
    // }


    public isAuthenticated(): boolean {
      return this.tokenUtil.isAutheticated;
    }

    public getActiveUserId(): string {
      var token = this.tokenUtil.accessToken;
      if(token == null)
        return null;

      var decoded = jwt.decode(token);
      
      var userId = decoded.sub;

      return userId;
    }

    public isActiveCustomer(): boolean {
      var token = this.tokenUtil.accessToken;
      if(token == null)
        return false;

      var decoded = jwt.decode(token);

      var strStatus: string = decoded.customerStatus;
      var status: CustomerStatus = CustomerStatus[strStatus];
      var active = status == CustomerStatus.Registered;

      return active;
    }
}