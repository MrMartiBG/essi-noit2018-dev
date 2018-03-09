import { Component } from '@angular/core';
import { SocketFuncService } from '../socket-func.service';

@Component({
  template:
  `
  <div class="container" style="width: 100%; max-width: 250px;">
    <h1> Create service </h1>
    <form (ngSubmit)="addServiceInfo()" #createServiceForm="ngForm">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" required [(ngModel)]="name" name="name">
      </div>
      <div class="form-group">
        <label for="address">Address</label>
        <input type="text" class="form-control" id="address" required [(ngModel)]="address" name="address">
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="text" class="form-control" id="email" required [(ngModel)]="email" name="email">
      </div>
      <div class="form-group">
        <label for="mobile">Mobile</label>
        <input type="text" class="form-control" id="mobile" required [(ngModel)]="mobile" name="mobile">
      </div>
      <button type="submit" class="btn btn-create-service" [disabled]="!createServiceForm.form.valid">Create service</button>
    </form>
  </div>
  `
})
export class ServiceCreateServiceComponent {
  name: string;
  address: string;
  email: string;
  mobile: string;
  serviceId: number;
  services = [];

  constructor(private socketFunc: SocketFuncService) { }

  result_callback(info) {
    console.log(info);
  }
  addServiceInfo() {
    this.socketFunc.addServiceInfo(
      {
        name: this.name,
        address: this.address,
        email: this.email,
        mobile: this.mobile
      },
      this.result_callback
    );
    this.name='';
    this.address='';
    this.email='';
    this.mobile='';
  }
}
