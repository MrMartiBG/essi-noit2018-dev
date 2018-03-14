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
  <h1> Displaying {{cars.length}} car/s</h1>
  <div class="container">
    <div class="card-group">
      <div class="card" *ngFor="let car of cars">
        <div class="card-body">
          <h5 class="card-title">{{car.brand}} {{car.model}}</h5>
          <p class="card-text">Brand: {{car.brand}}</p>
          <p class="card-text">Model: {{car.model}}</p>
          <p class="card-text">Generation: {{car.generation}}</p>
          <p class="card-text">Engine: {{car.engine}}</p>
          <p class="card-text">VIN Number: {{car.vin_number}}</p>
          <button> edit </button>
          <button> add to service </button>
          <button> modifications </button>
        </div>
      </div>
    </div>
  </div>
  <!--<table align="center">
    <tr>
      <th>Car ID</th>
      <th>Brand</th>
      <th>Model</th>
      <th>Generation</th>
      <th>Engine</th>
      <th>VIN Number</th>
    </tr>
    <tr *ngFor="let car of cars">
      <td width="10%">{{car.id}}</td>
      <td width="15%">{{car.brand}}</td>
      <td width="15%">{{car.model}}</td>
      <td width="15%">{{car.generation}}</td>
      <td width="15%">{{car.engine}}</td>
      <td width="30%">{{car.vin_number}}</td>
    </tr>
  </table>-->
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
