export class Price {

    constructor(id: string, value: number = 0, code: string = "CDN", symbole: string = "$"){
        this.id = id
        this.value = value;
        this.code = code;
        this.symbole = symbole;
    }
    public id: string;
    public value: number = 0;
    public code: string;
    public symbole: string;

    public get currencyText(): string {
        return this.symbole + " " + this.code;
    }

    public get valueText(): string {
        return this.value.toFixed(2);
    }

    public fullLabel(): string {
        return this.currencyText + " " + this.valueText;
    }
}