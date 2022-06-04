export class ModalButton {
    constructor(label: string, callback: Function){
        this.label = label;
        this.callback = callback;
    }
    label: string = "";
    callback: Function;
}