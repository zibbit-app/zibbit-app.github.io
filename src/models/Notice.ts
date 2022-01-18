export class Notice {
    private _isVisible: boolean;
    private _noticeDelayTimer;
    private _noticeDurationTimer;
    private _endCallback;
    private _ended: boolean = false;

    constructor(message, severity = "info", endCallback: (notice: Notice )=> void = null){
        this.message = message;
        this.severity = severity;
        this._endCallback = endCallback;
    }
    public message: string;
    public severity: string;

    get isVisible(): boolean {
        return this._isVisible;
    }

    public begin(delayMs: number = 0, durationMs: number = 3000): void {
        this._noticeDelayTimer = setTimeout(() => {
            if(this._ended){ return; }
            this._isVisible = true;
            this._noticeDurationTimer = setTimeout(() => {
                this.end();
            }, durationMs);
        }, delayMs);
    }

    public end(): void {
        this._ended = true;
        clearTimeout(this._noticeDelayTimer);
        clearTimeout(this._noticeDurationTimer);
        this._isVisible = false
        if(this._endCallback !== null){
            this._endCallback(this);
        }
    }

}