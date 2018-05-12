import { Component, OnInit } from '@angular/core';
import { SocketFuncService } from '../socket-func.service';

@Component({
  template:
  `
  `
})
export class ModsListComponent {
  carId: number;
  carBrand: string;
  carModel: string;
  cars = [];
  mods = [];
  constructor(private socketFunc: SocketFuncService) { }
  result(info) {
    console.log(info);
    this.mods = info.info;
    console.log(this.mods);
  }
  result_cars(info) {
    console.log("result_cars", info.info);
    for(var i = 0 ; i<info.info.length ; i++) {
      this.cars.push(info.info[i]);
    }
  }
  ngOnInit() {
    /*this.socketFunc.fetchUserCars(
      result_cars => this.result_cars(result_cars)
    );
  }
  getMods() {
    this.socketFunc.fetchModification(
      {
        id: this.carId
      },
      result => this.result(result)
    );*/
  }
}
