export class Benefit {
    constructor(title){
        this.title = title;
        this.items = [];
    }
    title: string = "";
    icon: string = "";
    items: string[];
}