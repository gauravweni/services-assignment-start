import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }

  activeToInactiveCounter = 0;
  inactiveToactiveCounter = 0;

  incrementActiveToInactive() {
    this.activeToInactiveCounter++ ;
    console.log('Active To Inactive:' + this.activeToInactiveCounter);
  }

  incrementInactiveToActive() {
    this.inactiveToactiveCounter++ ;
    console.log('Inactive To active:' + this.inactiveToactiveCounter);
  }
}
