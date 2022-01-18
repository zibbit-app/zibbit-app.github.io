export class Card {
    constructor(title, description, route, imgUrl = ''){
        this.title = title;
        this.description = description;
        this.imageUrl = imgUrl;
        this.route = route;
    }
    route: string = "";
    imageUrl: string = "";
    title: string = "";
    description: string = "";
}