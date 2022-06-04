import { UserService } from './../services/UserService';
import { Input } from '@angular/core';
//import {Customer} from '../models/Customer'
import {Component, Output, EventEmitter} from "@angular/core"

@Component({
    moduleId: module.id,
    //moduleId: __moduleName,
    selector: "menu-ui",
    templateUrl: "../views/menu.html",
    styleUrls: ["../assets/styles/menu.scss"]
})
export class MenuComponent {
    constructor(private userService: UserService){
        
    }

    async logoutAsync(){
        await this.userService.logoutAsync();
        this.navigationEvent.emit("home");
    }

    get isSignedIn(): boolean{
        return  this.userService.isAuthenticated();
    }

    @Input() fullMenu: boolean = false;
    @Output() navigationEvent = new EventEmitter();
    notifyNavigationOccured(event) {
        var destination = event.target.text;
        this.navigationEvent.emit(destination);
     }
    

}