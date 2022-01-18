import {Component, Input} from "@angular/core"
import {Notice} from "../models/Notice";
import { setTimeout, clearTimeout } from "timers";


@Component({
    moduleId: module.id,
    //moduleId: __moduleName,
    selector: "pageWrapper-ui",
    templateUrl: "../views/pageWrapper.html",
    styleUrls: ["../assets/styles/page-wrapper.scss"]
})

export class PageWrapperComponent {
    @Input() public isBusy: boolean = false;
    @Input() public notices: Notice[];
}
