import { ResourceType } from './models/ResourceType';
import { UserService } from './services/UserService';
import { ForbiddenError, UnauthorizedError, BadRequestError } from './errors/ApplicationErrors';
import { TokenUtil } from './utilities/TokenUtil';
import {IocRegistrations} from "./IocRegistrations";
import {createContainer, AwilixContainer} from 'awilix';
import {inject, Injectable, Injector} from '@angular/core';
import {GateKeeperClient} from './utilities/GateKeeperClient';
import axios from "axios";
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { ErrorType } from './components/ErrorComponent';
import { userInfo } from 'os';
import { IdentityClient } from './utilities/IdentityClient';

@Injectable({
    providedIn: 'root',
  })
export class Bootstrapper {

    public static container: AwilixContainer;
    public static components: any[];

    public static initialize(){
        this.container = createContainer();
        this.components = [];
        IocRegistrations.loadServices(this.container);
        this.components = IocRegistrations.loadComponents(this.container);
    }

    public static setAuthInterceptor(injector : Injector){
        //userService: UserService, identityClient: IdentityClient
       var userService = injector.get(UserService);
       var identityClient = injector.get(IdentityClient); 
       const HEADER_NAME = 'Authorization';
       var tokenUtil = new TokenUtil();
        
        // Add a request interceptor
        axios.interceptors.request.use(function (config) {
            console.log("auth request interceptor called")
            config.headers["audience-type"] = "Website";
            if(tokenUtil.isAutheticated)
                config.headers[HEADER_NAME] = tokenUtil.getAuthHeader();
            
            return config;
        });

        // Add a response interceptor 
        axios.interceptors.response.use(function (response) {
            // Any status code that lie within the range of 2xx cause this function to trigger
            // Do something with response data
            return response;
        }, async function (error) {
            if(!error.response)
                throw new Error("Network Error");
            var status = error.response.status;
            console.log(status);
            var isRefreshAttempt = error.response.config.url == identityClient.refreshUrl;
            if(isRefreshAttempt && status === 401){
                console.log("caught refresh attempt");
                window.location.href = "/login";
            }
            if(status === 400){
                console.log("bad request", error.response, error.response.data);
                throw new BadRequestError(error.response.data);

            }
            if(status == 403) {
                console.log("forbidden response interceptor called");
                throw new ForbiddenError(error.reponse.data);
            } if(status == 401) {
                console.log("unauth response interceptor called")
                var redirectUrl = error.response.config.url;
                if(!tokenUtil.isAutheticated)
                    throw new UnauthorizedError(redirectUrl);

                console.log("attempting to refresh");
                var success = await userService.authRefreshAsync();

                if(!success) {
                    console.log("refresh not successful");
                    throw new UnauthorizedError(redirectUrl);

                }

                console.log("attempting to retry orig");
                error.config.headers[HEADER_NAME] = tokenUtil.getAuthHeader();
                return axios.request(error.config);        
                
                    
                //tokenUtil.setAuthInfo(null);
                
                // window.location.href ='/login';
                // return Promise.resolve(emptyResponse)
            }
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            // Do something with response error
            
            return Promise.reject(error.response);
        });
    }

    public static loadAsyncServices(injector: Injector){
        return Promise.resolve()
        .then(()=>{
            var client = injector.get(GateKeeperClient);
            return client.Connect();
        })
    }

    public static getInstanceByString(typeName: string) {
        arguments
        var service = this.container.resolve('ProductInfoService')
        return 
    }

    public static getInstanceByType<T>(typeArg : T&Function): T {
        var typeName = typeArg.name;
        var service: T = this.container.resolve(typeName);
        return service;
    }

}