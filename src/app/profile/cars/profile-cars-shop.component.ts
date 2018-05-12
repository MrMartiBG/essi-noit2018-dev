import { Component, OnInit } from '@angular/core';
import { SocketFuncService } from '../../socket-func.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile-cars-shop.component.html'
})
export class ProfileCarsShopComponent implements OnInit {
  cars = [];
  addCarShop = {car_id: null, account_service_id: null};
  constructor(private socketFunc: SocketFuncService) { }
  result(info) {
    console.log(info);
    this.cars = info.info;
  }
  result_add(info) {
    console.log(info);
  }
  addCarService() {
    this.socketFunc.addCarService(
      this.addCarShop,
      result_add => this.result_add(result_add)
    )
    console.log("test_edit");
  }
  ngOnInit() {
    this.socketFunc.getCarsUser(
      result => this.result(result)
    );
  }
}
