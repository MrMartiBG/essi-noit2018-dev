import { Component , OnInit} from '@angular/core';
import { SocketFuncService } from '../socket-func.service';

@Component({
  template:
  `
  <h1> You have {{carsService.length}} car/s in this service</h1>
  <h2> Fill one or both fields, depending on what you want. </h2>
  <div class="container" style="width: 100%; max-width: 250px;">
    <form (ngSubmit)="update()" #carServiceForm="ngForm">
      <div class="form-group">
        <label for="service_id">ID of your service</label>
        <input type="text" class="form-control" id="service_id" required [(ngModel)]="service_id" name="service_id">
      </div>
      <button type="submit" class="btn btn-update-car-service-list" [disabled]="!carServiceForm.form.valid">Update</button>
    </form>
  </div>
  <ul class="items">
    <li *ngFor="let object of cars">
      <span class="badge">{{object.id}}{{object.brand}}{{object.model}}{{object.generation}}{{object.engine}}</span>
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
  result_cars(info){
      console.log("result_cars",info.info[0]);
      this.cars.push(info.info[0]);
  }
  result_service(info) {
    console.log("result_service",info);
    this.carsService = info.info;
    for(var i = 0 ; i < info.info.length ; i++) {
      this.socketFunc.fetchCar(
        {
          id: info.info[i].car_id
        },
        result_cars => this.result_cars(result_cars)
      )
    }
    console.log(this.carsService);
  }
  update() {
    this.socketFunc.fetchServiceCar(
      {
        id: this.service_id
      },
      {},
      result_service => this.result_service(result_service)
    )
  }
}
