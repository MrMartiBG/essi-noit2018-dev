import { Component } from '@angular/core';
import { SocketFuncService } from '../socket-func.service';

@Component({
  template:
  `
  <div class="container" style="width: 100%; max-width: 250px;">
    <h1> Add car to service </h1>
    <form (ngSubmit)="addServiceCar()" #carServiceForm="ngForm">
      <div class="form-group">
        <label for="car_id">ID of your car</label>
        <input type="text" class="form-control" id="car_id" required [(ngModel)]="car_id" name="car_id">
      </div>
      <div class="form-group">
        <label for="service_id">ID of your service</label>
        <input type="text" class="form-control" id="service_id" required [(ngModel)]="service_id" name="service_id">
      </div>
      <button type="submit" class="btn btn-add-car-service" [disabled]="!carServiceForm.form.valid">Add car to service</button>
    </form>
  </div>
  `
})
export class ServiceCarAddComponent {
  car_id: string;
  service_id: string;

  constructor(private socketFunc: SocketFuncService) { }

  result(info) {
    console.log(info);
  }

  addServiceCar() {
    this.socketFunc.addServiceCar(
      {
        id: this.service_id
      },
      {
        id: this.car_id
      },
      this.result
    );
    this.car_id='';
    this.service_id='';
  }
}
