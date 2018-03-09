import { Component } from '@angular/core';
import { SocketFuncService } from '../socket-func.service';

@Component({
  template:
  `
  <div class="container" style="width: 100%; max-width: 350px;">
    <form (ngSubmit)="fetchServiceUsers()" #fetchServiceUsersForm="ngForm">
      <div class="form-group">
        <label for="serviceId">ID of your service</label>
        <input type="text" class="form-control" id="serviceId" required [(ngModel)]="serviceId" name="serviceId">
      </div>
      <button type="submit" class="btn btn-fetch-services" [disabled]="!fetchServiceUsersForm.form.valid">Update users</button>
      <button type="button" class="btn btn-add-service-users" routerLink="../newuser">Add user</button>
    </form>
    <ul class="items">
      <li *ngFor="let object of service_user">
        <span class="badge">{{object.service_id}}{{object.user_id}}{{object.user_type}}</span>
      </li>
    </ul>
  </div>
  `
})
export class ServiceUserListComponent {
  service_user = [];
  serviceId: number;

  constructor(private socketFunc: SocketFuncService) { }

  result_servicUseres(info) {
    console.log(info);
    this.service_user = info.info;
  }
  fetchServiceUsers() {
    this.socketFunc.fetchServiceUser(
      {
        service_id: this.serviceId
      },
      result_servicUseres => this.result_servicUseres(result_servicUseres)
    )
  }
}
