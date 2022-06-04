export class Feature {
    constructor(label: string, include: boolean){
        this.label = label;
        this.include = include;
    }
    label: string = "";
    include: boolean = false;
}