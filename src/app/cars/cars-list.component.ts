import { Component , OnInit} from '@angular/core';
import { SocketFuncService } from '../socket-func.service';

@Component({
  template:
  `
  <h1> You have {{cars.length}} car/s</h1>
  <ul class="items">
    <li *ngFor="let object of cars">
      <span class="badge">{{object.brand}}</span>{{object.model}}{{object.generation}}{{object.engine}}{{object.vin_number}}
    </li>
  </ul>
  `
})
export class CarsListComponent {
  cars = [];
  constructor(private socketFunc: SocketFuncService) { }
  result(info) {
    console.log(info);
    this.cars = info.info;
    console.log(this.cars);
  }
  ngOnInit() {
    this.socketFunc.fetchMyCars(
      result => this.result(result)
    );
  }
}
