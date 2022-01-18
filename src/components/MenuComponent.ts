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
    @Output() navigationEvent = new EventEmitter();
    notifyNavigationOccured(event) {
        var destination = event.target.text;
        this.navigationEvent.emit(destination);
     } 
}