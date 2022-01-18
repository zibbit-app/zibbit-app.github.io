import {Component, Input, EventEmitter, Output} from "@angular/core"
import {Notice} from "../models/Notice"

@Component({
    moduleId: module.id,
    //moduleId: __moduleName,
    selector: "noticeBar-ui",
    templateUrl: "../views/noticeBar.html",
    styleUrls: ["../assets/styles/notice-bar.scss"]
})
export class NoticeBarComponent {
    @Input() notice: Notice;
    @Output() closeNoticeEvent = new EventEmitter();

    ngOnInit() {
        // this.notice = new Notice("tes")
    }
    public closeClickHandler(e): void {
        console.log("exit clicked");
        this.closeNoticeEvent.emit("emitted");
    }
}