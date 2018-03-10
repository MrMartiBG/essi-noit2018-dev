import { Component } from '@angular/core';
import { SocketFuncService } from '../socket-func.service';

@Component({
  template:
  `
  <div class="container" style="width: 100%; max-width: 250px;">
    <h1> Create service </h1>
    <form (ngSubmit)="addServiceUser()" #createServiceUser="ngForm">
      <div class="form-group">
        <label for="service_id">Service ID</label>
        <input type="text" class="form-control" id="service_id" required [(ngModel)]="service_id" name="service_id">
      </div>
      <div class="form-group">
        <label for="user_id">User ID</label>
        <input type="text" class="form-control" id="user_id" required [(ngModel)]="user_id" name="user_id">
      </div>
      <div class="form-group">
        <label for="user_type">User Type</label>
        <select class="form-control" id="user_type" required [(ngModel)]="user_type" name="user_type">
          <option *ngFor="let status of user_type_options" [value]="status">{{status}}</option>
        </select>
      </div>
      <button type="submit" class="btn btn-create-service" [disabled]="!createServiceUser.form.valid">Add user</button>
    </form>
  </div>
  `
})
export class ServiceUserAddComponent {
  service_id: number;
  user_id: number;
  user_type: string;
  user_type_options = ['Owner', 'Worker', 'Client']

  constructor(private socketFunc: SocketFuncService) { }
  result_callback(info) {
    console.log(info);
  }
  addServiceUser() {
    this.socketFunc.addServiceUser(
      {
        user_id: this.user_id,
        user_type: this.user_type
      },
      {
        service_id: this.service_id
      },
      result_callback => this.result_callback(result_callback)
    )
  }
}
