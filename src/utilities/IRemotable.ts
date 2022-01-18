import {Notice} from '../models/Notice';

export interface IRemotable{
    setBusyIndicator(isVisible: boolean): void;
    setNotices(notices : Notice[]): void;
}