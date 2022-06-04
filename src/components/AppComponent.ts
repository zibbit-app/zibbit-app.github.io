import { AppError, UnauthorizedError } from './../errors/ApplicationErrors';
import { UserService } from './../services/UserService';
import { Bootstrapper } from './../Bootstrapper';
import {Component, Injectable, Injector, NgZone} from "@angular/core";
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import {AppRemoteManager} from "../utilities/AppRemoteManager";
import {IRemotable} from "../utilities/IRemotable";
import {Notice} from "../models/Notice";
import { setTimeout, clearTimeout } from "timers";
@Component({
    moduleId: module.id,
    //moduleId: __moduleName,
    selector: "app-ui",
    templateUrl: "../views/app.html",
    styleUrls: ["../assets/styles/app.scss"]
})
export class AppComponent implements IRemotable {
    public isBusy: boolean = false;
    public notices: Notice[] = [];
    public showHeader: boolean = true;
    public showFooter: boolean = true;

    constructor(appRemote: AppRemoteManager, private router: Router, private injector: Injector) {
        appRemote.setRemotable(this);

        this.router.events.subscribe((event: any) => {
            var url = event['url'];
            if (event instanceof NavigationEnd) {
                var isHomePage = url.startsWith('/home') || url == '/' || url.startsWith('/?');
                this.showHeader = !isHomePage;
                //this.showFooter = !isHomePage;
            }
          });
        
        //   var error = new UnauthorizedError();
        //   throw error;
        //   var test1 = error instanceof AppError;
        //   var test2 = error instanceof UnauthorizedError;
        //   console.log("error test", test1, test2);
      
          
        Bootstrapper.setAuthInterceptor(injector);
    }

    public setBusyIndicator(isVisible: boolean): void {
        console.log("in set busy")
        this.isBusy = isVisible; 
    }
    public setNotices(notices: Notice[]){
        console.log("in notices")
        this.notices.push(...notices);
    }
}