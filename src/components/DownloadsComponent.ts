import {Component} from "@angular/core"
import {Installer} from "../models/Installer"
import {ProductInfoService} from "../services/ProductInfoService";
import {Notice} from "../models/Notice";



@Component({
    moduleId: module.id,
    //moduleId: __moduleName,
    selector: "downloads-page-ui",
    templateUrl: "../views/downloads.html",
    styleUrls: ["../assets/styles/downloads.scss"]
})
export class DownloadsComponent {
    constructor(private prodInfoService: ProductInfoService) { }
    public installers: Installer[];

    get latest(): Installer {
        return this.installers[0];
    }
    
    get images(): Map<string,string>{
        let imgs = this.prodInfoService.imageUrlDict;
        return imgs;
    }

    ngOnInit() {
        this.setDownloads();
        //this.setCards();
    }
 
    private setDownloads(): void {
        this.installers = this.prodInfoService.getInstallers();
    }

    // private setCards(): void{
    //     this.cards = this.prodInfoService.getCards();
    // }

 
    
}
