import { Component , OnInit} from '@angular/core';
import { SocketFuncService } from '../socket-func.service';

@Component({
  template:
  `
  <style>
    table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    max-width: 1500px;
    }
    td, th {
      border: 1px solid #dddddd;
      text-align: center;
      padding: 8px;
    }
    tr:nth-child(even) {
      background-color: #dddddd;
    }
  </style>
  <h1> You have {{carsService.length}} car/s in this service</h1>
  <div class="container" style="width: 100%; max-width: 250px;">
    <form (ngSubmit)="update()" #carServiceForm="ngForm">
      <div class="form-group">
        <label for="service_id">ID of your service</label>
        <input type="text" class="form-control" id="service_id" required [(ngModel)]="service_id" name="service_id">
      </div>
      <button type="submit" class="btn btn-update-car-service-list" [disabled]="!carServiceForm.form.valid">Update</button>
    </form>
  </div>
  <br>
  <table align="center">
    <tr>
      <th>Car ID</th>
      <th>Brand</th>
      <th>Model</th>
      <th>Generation</th>
      <th>Engine</th>
    </tr>
    <tr *ngFor="let car of cars">
      <td width="10%">{{car.id}}</td>
      <td width="20%">{{car.brand}}</td>
      <td width="20%">{{car.model}}</td>
      <td width="30%">{{car.generation}}</td>
      <td width="20%">{{car.engine}}</td>
    </tr>
  </table>
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
      this.socketFunc.fetchCarService(
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
      result_service => this.result_service(result_service)
    )
  }
}
//TO DO: add table view of cars
