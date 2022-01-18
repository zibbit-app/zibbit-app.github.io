import {Component, Input} from "@angular/core"
import {Card} from '../models/Card'

@Component({
    moduleId: module.id,
    //moduleId: __moduleName,
    selector: "carousel-ui",
    templateUrl: "../views/carousel.html",
    styleUrls: ["../assets/styles/carousel.scss"]
})
export class CarouselComponent {
    //card: Card = new Card('test', 'test description');
    @Input() public slideUrls: string[];
        // new Card('Learn', 'test description', '/learn'),
        // new Card('Download', 'test description2', '/downloads')
    public slides = () => this.getSlides(this.slideUrls);
    getSlides(urls){
        var slides = [];
        urls.forEach((val, index) =>{
            var activeClass = (index === 0) ? 'active' : '';
            var className = "carousel-item " + activeClass;
            var slide = {class: className, alt: index, src: val};
            slides.push(slide)
        })
        return slides;
    }
    
}