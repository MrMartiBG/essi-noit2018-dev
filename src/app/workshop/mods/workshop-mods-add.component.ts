import { Component, OnInit } from '@angular/core';
import { SocketFuncService } from '../../socket-func.service';

@Component({
  selector: 'app-profile',
  templateUrl: './workshop-mods-add.component.html'
})
export class WorkshopModsAddComponent implements OnInit {
  cars = [];
  car_selection = {};
  modInfo = {car_id: null, type: null, date: null, mileage: null, zone: null, part: null, part_make: null, info: null};
  status = false;
  constructor(private socketFunc: SocketFuncService) { }

  result_add(info) {
    console.log(info);
    if (info.status == "successful") {
      this.status = true;
    }
  }
  result_cars(info) {
    console.log(info);
    this.cars = info.info;
  }
  addModShop() {
    this.socketFunc.addModShop(
      {
        account_service_id: this.socketFunc.current_service,
        car_id: this.modInfo.car_id,
        type: this.modInfo.type,
        date: this.modInfo.date,
        mileage: this.modInfo.mileage,
        zone: this.modInfo.zone,
        part: this.modInfo.part,
        part_make: this.modInfo.part_make,
        info: this.modInfo.info
      },
      result_add => this.result_add(result_add)
    )
  }
  ngOnInit() {
    this.socketFunc.getCarsShop(
      {
        account_service_id: this.socketFunc.current_service
      },
      result_cars => this.result_cars(result_cars)
    )
  }

}
