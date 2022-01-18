import {Component} from "@angular/core"
import { AppConfig } from '../utilities/AppConfig';
//import { AppConfig } from "utilities/AppConfig";
import {Card} from "../models/Card"
import {ProductInfoService} from "../services/ProductInfoService";
import { Benefit } from "../models/Benefit";


@Component({
    moduleId: module.id,
    //moduleId: __moduleName,
    selector: "home-page-ui",
    templateUrl: "../views/home.html",
    styleUrls: ["../assets/styles/home.scss"]
})
export class HomeComponent {
    constructor(private prodInfoService: ProductInfoService) { }
    public cards: Card[];
    public slideUrls: string[];
    public imageDir: string;
    public summaryBenefit: Benefit;
    public benefits: Benefit[];
    public pdfUrl: string;
    public exhibits: string[] = ["frog", "robot", "waterlily"]
    public productImgUrl: string = this.prodInfoService.GetProductImage();
    private config: AppConfig;
    

    get images(): Map<string,string>{
        let imgs = this.prodInfoService.imageUrlDict;
        return imgs;
    }

    private menuClickHandler(): void {
        var menu = document.getElementById('collapseMobileMenu');
        menu.classList.remove("show");
    }

    style() {
        var test = `linear-gradient(to left, rgba(245, 246, 252, 0.1), rgba(245, 246, 252, 0.9)),url("${this.productImg()}")`;

        let style = {
            'background-image': test
            //'background-image': `url(${this.productImg()})`

            // 'background-image': 'url("https://getsatisfaction.com/corp/img/product/five_obstacles.png"), linear-gradient(red, yellow)',
        };
        return style;
    }

    scroll(id): void {
        let el = document.getElementById(id);
        el.scrollIntoView({behavior:"smooth"});
      }

    productImg(): string {
        var test = this.prodInfoService.GetProductImage();
        return test;
    }

    ngOnInit() {
        this.setImageUrls();
        this.setCards();
        this.config = new AppConfig;
        this.imageDir = this.config.getUploadsPath() + '/main/word-icon.svg';
        this.benefits = this.prodInfoService.getBenefits();
        this.summaryBenefit = this.prodInfoService.getSummaryBenefit();
        this.pdfUrl = this.config.getUploadsPath() + '/samplePdfs/sample_affidavit.pdf';

    }

    
 
    private setImageUrls(): void {
        this.slideUrls = this.prodInfoService.getImageUrls();
    }

    private setCards(): void{
        this.cards = this.prodInfoService.getCards();
    }

 
    
}
