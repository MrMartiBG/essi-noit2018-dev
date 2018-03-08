import { Component } from '@angular/core';
import { SocketFuncService } from '../socket-func.service';

@Component({
  template:
  `
  <div class="container" style="width: 100%; max-width: 250px;">
    <h1> Add a car </h1>
    <form (ngSubmit)="addCar()" #carAddForm="ngForm">
      <div class="form-group">
        <label for="brand">Brand</label>
        <input type="text" class="form-control" id="brand" required [(ngModel)]="brand" name="brand">
      </div>
      <div class="form-group">
        <label for="model">Model</label>
        <input type="text" class="form-control" id="model" required [(ngModel)]="model" name="model">
      </div>
      <div class="form-group">
        <label for="generation">Generation</label>
        <input type="text" class="form-control" id="generation" required [(ngModel)]="generation" name="generation">
      </div>
      <div class="form-group">
        <label for="engine">Engine</label>
        <input type="text" class="form-control" id="engine" required [(ngModel)]="engine" name="engine">
      </div>
      <div class="form-group">
        <label for="vin">VIN No.</label>
        <input type="text" class="form-control" id="vin" required [(ngModel)]="vin" name="vin">
      </div>
      <button type="submit" class="btn btn-add-car" [disabled]="!carAddForm.form.valid">Add car</button>
    </form>
  </div>
  `
})
export class CarAddComponent {
  brand: string;
  model: string;
  generation: string;
  engine: string;
  vin: string;

  constructor(private socketFunc: SocketFuncService) { }

  result(info) {
    console.log(info);
  }

  addCar() {
    this.socketFunc.addCar(
      {
        brand: this.brand,
        model: this.model,
        generation: this.generation,
        engine: this.engine,
        vin: this.vin
      },
      this.result
    );
    this.brand='';
    this.model='';
    this.generation='';
    this.engine='';
    this.vin='';
  }
}
