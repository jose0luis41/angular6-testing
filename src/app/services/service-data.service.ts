import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class ServiceDataService {

  private titleLabel = new BehaviorSubject<string>("Professional");
  private titleSubLabel = new BehaviorSubject<string>("Reference form");

  currentLabel = this.titleLabel.asObservable();
  currentSubLabel = this.titleSubLabel.asObservable();
  constructor() {
    console.log('ok');
   }

  changeLabel(label: string){
    this.titleLabel.next(label);
  }

  changeSubLabel(label: string){
    this.titleSubLabel.next(label);
  }
}
