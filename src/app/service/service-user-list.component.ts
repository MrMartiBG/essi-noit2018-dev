import { Component } from '@angular/core';
import { SocketFuncService } from '../socket-func.service';

@Component({
  template:
  `
  <style>
    table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    max-width: 500px;
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
  <div class="container" style="width: 100%; max-width: 350px;">
    <form (ngSubmit)="fetchServiceUsers()" #fetchServiceUsersForm="ngForm">
      <div class="form-group">
        <label for="serviceId">ID of your service</label>
        <input type="text" class="form-control" id="serviceId" required [(ngModel)]="serviceId" name="serviceId">
      </div>
      <button type="submit" class="btn btn-fetch-services" [disabled]="!fetchServiceUsersForm.form.valid">Update users</button>
      <button type="button" class="btn btn-add-service-users" routerLink="../newuser">Add user</button>
    </form>
    <br>
    <table align="center">
      <tr>
        <th width="30%">User ID</th>
        <th>User type</th>
      </tr>
      <tr *ngFor="let user of service_user">
        <td>{{user.user_id}}</td>
        <td>{{user.user_type}}</td>
      </tr>
    </table>
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
