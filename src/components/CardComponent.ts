import {Component, Input} from "@angular/core"
import {Card} from '../models/Card'

@Component({
    moduleId: module.id,
    //moduleId: __moduleName,
    selector: "card-ui",
    templateUrl: "../views/card.html",
    styleUrls: ["../assets/styles/card.scss"]
})
export class CardComponent {
    //card: Card = new Card('test', 'test description');
    @Input() card: Card;
    
}