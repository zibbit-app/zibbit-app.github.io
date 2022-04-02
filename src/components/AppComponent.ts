import {Component, Injectable, NgZone} from "@angular/core";
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

    constructor(appRemote: AppRemoteManager, private zone: NgZone, private router: Router) {
        appRemote.setRemotable(this);

        this.router.events.subscribe((event: any) => {
            var url = event['url'];
            if (event instanceof NavigationEnd) {
                var isHomePage = url.startsWith('/home') || url == '/' || url.startsWith('/?');
                this.showHeader = !isHomePage;
                //this.showFooter = !isHomePage;
            }
          });
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