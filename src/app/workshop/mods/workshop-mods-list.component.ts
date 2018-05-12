import { Component, OnInit } from '@angular/core';
import { SocketFuncService } from '../../socket-func.service';

@Component({
  selector: 'app-profile',
  templateUrl: './workshop-mods-list.component.html'
})
export class WorkshopModsListComponent implements OnInit {
  mods = [];
  cars = [];
  car_selection = {car_id: null};
  mod_selection = {};

  constructor(private socketFunc: SocketFuncService) { }
  result_mods(info) {
    console.log(info);
    this.mods = info.info;
  }
  result_cars(info) {
    console.log(info);
    this.cars = info.info;
  }
  getModsCar() {
    this.socketFunc.getModsCar(
      {
        car_id: this.car_selection.car_id,
        account_service_id: this.socketFunc.current_service
      },
      result_mods => this.result_mods(result_mods)
    )
  }
  ngOnInit() {
    this.socketFunc.getCarsShop(
      {
        account_service_id: this.socketFunc.current_service
      },
      result_cars => this.result_cars(result_cars)
    );
  }

}
