import { Component, OnInit } from '@angular/core';
import { SocketFuncService } from '../../socket-func.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile-cars-edit.component.html'
})
export class ProfileCarsEditComponent implements OnInit {
  cars = [];
  car_selection = {id: null, make: null, model: null, generation: null, engine: null, vin_number: null, registration_number: null, public: null, info: null};
  constructor(private socketFunc: SocketFuncService) { }
  result_get(info) {
    console.log(info);
    this.cars = info.info;
    console.log(this.cars);
  }
  result_set(info) {
    console.log(info);
    console.log("test_result");
  }
  editCar() {
    this.socketFunc.updateCarId(
      this.car_selection,
      result_set => this.result_set(result_set)
    )
    console.log("test_edit");
  }
  ngOnInit() {
    this.socketFunc.getCarsUser(
      result_get => this.result_get(result_get)
    );
  }
}
