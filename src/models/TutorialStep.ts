
export class TutorialStep {
    constructor(title: string, imgUrl: string, ribbonIconUrl: string, ribbonIconPosition: number){
        this.title = title;
        this.imgUrl = imgUrl;
        this.ribbonIconUrl = ribbonIconUrl;
        this.ribbonIconPosition = ribbonIconPosition;
        this.items = [];
    }
    title: string;
    items: string[];
    imgUrl: string;
    ribbonIconUrl: string;
    ribbonIconPosition: number;
}