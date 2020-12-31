import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  constructor() { }

  incrementATICounter() {
    this.activeToInactiveCounter++;
    console.log('Active to Inactive counter - ' + this.activeToInactiveCounter);
  }

  incrementITACounter() {
    this.inactiveToActiveCounter++;
    console.log('Inactive to Active counter - '+ this.inactiveToActiveCounter);
  }

}
