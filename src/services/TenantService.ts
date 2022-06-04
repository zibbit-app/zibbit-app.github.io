import { Tenant } from './../models/Tenant';
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


@Injectable({
  providedIn: 'root',
})
export class TenantService {
    private authClient: IdentityClient;
    private plansClient: PlansClient;


  
    constructor(authClient: IdentityClient, plansClient: PlansClient) {
      this.authClient = authClient;
      this.plansClient = plansClient;
    }

    public async getOrganizationPlanAsyn(customerId: string): Promise<Plan>{
      return await this.plansClient.getPlanAsync(customerId);
    }

    public async updateOrganizationDetailsAsyn(org: Tenant): Promise<string>{
      return await this.authClient.updateOrganizationDetailsAsync(org);
    }

    public async getNewOrganizationRegKey(orgId: string): Promise<string>{
      return await this.authClient.newOrganizationRegKeyAsync(orgId);
    }

    public async getOrganizationRegKey(orgId: string): Promise<string>{
      return this.authClient.getOrganizationRegKeyAsync(orgId);
    }

    public async getOrganizationById(orgId: string): Promise<Tenant>{
      return this.authClient.getOrganizationAsync(orgId);
    }

    public async getOrganizationsByUserAsync(userId: string): Promise<Tenant[]>{
      var result = await this.authClient.getOrganizationsByUserAsync(userId);
      return result;
    }

    public async requestAccessToOrganizationAsync(regKey: string): Promise<boolean>{
      var result = await this.authClient.requestAccessToOrganizationAsync(regKey);
      return result;
    }

    public async revokeAccessToOrganizationAsync(orgId: string, userId: string): Promise<boolean>{
      var result = await this.authClient.revokeAccessToOrganizationAsync(orgId, userId);
      return result;
    }

    public async createOrganizationAsync(orgName: string): Promise<boolean>{
      var result = await this.authClient.createOrganizationAsync(orgName);
      return result;
    }
}