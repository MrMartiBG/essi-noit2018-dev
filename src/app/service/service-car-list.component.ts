import { Component , OnInit} from '@angular/core';
import { SocketFuncService } from '../socket-func.service';

@Component({
  template:
  `
  <h1> You have {{carsService.length}} car/s in this service</h1>
  <div class="container" style="width: 100%; max-width: 250px;">
    <form (ngSubmit)="update()" #carServiceForm="ngForm">
      <div class="form-group">
        <label for="service_id">ID of your service</label>
        <input type="text" class="form-control" id="service_id" required [(ngModel)]="service_id" name="service_id">
      </div>
      <div class="form-group">
        <label for="car_id">ID of the car</label>
        <input type="text" class="form-control" id="car_id" required [(ngModel)]="car_id" name="car_id">
      </div>
      <button type="submit" class="btn btn-update-car-service-list" [disabled]="!carServiceForm.form.valid">Update</button>
    </form>
  </div>
  <ul class="items">
    <li *ngFor="let object of cars">
      <span class="badge">{{object.id}}{{object.brand}}{{object.model}}{{object.generation}}{{object.engine}}{{object.vin_number}}</span>
    </li>
  </ul>
  `
})
export class ServiceCarListComponent {
  carsService = [];
  cars = [];
  service_id: number;
  car_id: number;
  constructor(private socketFunc: SocketFuncService) { }
  result_service(info) {
    console.log(info);
    this.carsService = info.info;
    console.log(this.carsService);
  }
  result_cars(info) {
    console.log(info);
    this.cars = info.info;
    console.log(this.cars);
  }
  update() {
    this.socketFunc.fetchServiceCar(
      {
        id: this.service_id
      },
      {},
      result_service => this.result_service(result_service)
    );
    this.socketFunc.fetchCar(
      {
        id: this.car_id
      },
      result_cars => this.result_cars(result_cars)
    )
  }
}
