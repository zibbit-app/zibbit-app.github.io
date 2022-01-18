import { Injectable } from '@angular/core';
import {IRemotable} from '../utilities/IRemotable';
import {Notice} from '../models/Notice';

@Injectable({
  providedIn: 'root',
})
export class AppRemoteManager {
  private _remotable: IRemotable;

  public setRemotable(remotable: IRemotable){
    this._remotable = remotable;
  }

  public setBusyIndicator(isVisible: boolean): void {
    this._remotable.setBusyIndicator(isVisible);
  }

  public setNotices(...notices : Notice[]): void {
    this._remotable.setNotices(notices);
    
  }

}