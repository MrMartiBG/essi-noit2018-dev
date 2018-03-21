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
  <div class="container" style="width: 100%; max-width: 350px;">
    <form (ngSubmit)="fetchServiceInfo()" #fetchServicesForm="ngForm">
      <div class="form-group">
        <label for="serviceId">ID of your service</label>
        <input type="text" class="form-control" id="serviceId" required [(ngModel)]="serviceId" name="serviceId">
      </div>
      <button type="submit" class="btn btn-fetch-services" [disabled]="!fetchServicesForm.form.valid">Update services</button>
      <button type="button" class="btn btn-add-services" routerLink="../add">Add service</button>
    </form>
  </div>
  <br>
  <table align="center">
    <tr>
      <th>Service Name</th>
      <th>Service Address</th>
      <th>Service email</th>
      <th>Service Mobile</th>
    </tr>
    <tr>
      <td>{{name}}</td>
      <td>{{address}}</td>
      <td>{{email}}</td>
      <td>{{mobile}}</td>
    </tr>
  </table>
  `
})
export class ServiceListServiceComponent {
  name: string;
  address: string;
  email: string;
  mobile: string;
  serviceId: number;

  constructor(private socketFunc: SocketFuncService) { }

  result_services(info) {
    console.log(info.info);
    this.name = info.info.name;
    this.address = info.info.address;
    this.email = info.info.email;
    this.mobile = info.info.mobile;
  }
  fetchServiceInfo() {
    this.socketFunc.fetchServiceInfo(
      {
        id: this.serviceId
      },
      result_services => this.result_services(result_services)
    )
  }
}
