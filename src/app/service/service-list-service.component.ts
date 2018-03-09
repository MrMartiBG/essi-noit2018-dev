import { Component } from '@angular/core';
import { SocketFuncService } from '../socket-func.service';

@Component({
  template:
  `
  <div class="container" style="width: 100%; max-width: 350px;">
    <form (ngSubmit)="fetchServiceInfo()" #fetchServicesForm="ngForm">
      <div class="form-group">
        <label for="serviceId">ID of your service</label>
        <input type="text" class="form-control" id="serviceId" required [(ngModel)]="serviceId" name="serviceId">
      </div>
      <button type="submit" class="btn btn-fetch-services" [disabled]="!fetchServicesForm.form.valid">Update services</button>
      <button type="button" class="btn btn-add-services" routerLink="../add">Add service</button>
    </form>
    <ul class="items">
      <li *ngFor="let object of services">
        <span class="badge">{{object.name}}{{object.address}}{{object.email}}{{object.mobile}}</span>
      </li>
    </ul>
  </div>
  `
})
export class ServiceListServiceComponent {
  name: string;
  address: string;
  email: string;
  mobile: string;
  serviceId: number;
  services = [];

  constructor(private socketFunc: SocketFuncService) { }

  result_services(info) {
    console.log(info);
    this.services = info.info;
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
