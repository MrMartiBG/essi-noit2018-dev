import { Component } from '@angular/core';
import { SocketFuncService } from '../socket-func.service';

@Component({
  template:
  `
  <h1> Modifications of car: {{carId}} </h1>
  <div class="container" style="width: 100%; max-width: 250px;">
    <form (ngSubmit)="getMods()" #modListForm="ngForm">
      <div class="form-group">
        <label for="carId">ID of your car</label>
        <input type="text" class="form-control" id="carId" required [(ngModel)]="carId" name="carId">
      </div>
      <button type="submit" class="btn btn-get-mods" [disabled]="!modListForm.form.valid">Get modifications</button>
    </form>
  </div>
  <h1> You have {{mods.length}} modifications on this car/s</h1>
  <ul class="items">
    <li *ngFor="let object of mods">
      <span class="badge">{{object.modification_id}}{{object.status}}{{object.mileage}}{{object.date}}{{object.type}}{{object.part}}{{object.description}}</span>
    </li>
  </ul>
  `
})
export class ModsListComponent {
  carId: number;
  mods = [];
  constructor(private socketFunc: SocketFuncService) { }
  result(info) {
    console.log(info);
    this.mods = info.info;
    console.log(this.mods);
  }
  getMods() {
    this.socketFunc.fetchModification(
      {
        id: this.carId
      },
      result => this.result(result)
    );
  }
}
