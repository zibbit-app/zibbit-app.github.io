import { Feature } from './Feature';
import { Price } from "./Price";

export class Plan {

    constructor(id: string, name: string, description: string, features: Feature[] = []){
        this.id = id;
        this.name = name;
        this.descritpion = description;
        this.features = features;
    }
    public id: string;
    public name: string;
    public descritpion: string;
    public features: Feature[]
    public prices: Price[];
    public maxUsers: number; 

    public static empty = (): Plan => { return new Plan("0", "test1", "empty") }
}