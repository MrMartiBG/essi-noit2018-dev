import { Component } from '@angular/core';

@Component({
  template:
  `
  <nav class="navbar navbar-expand navbar-dark" style="background-color: #485056;">
    <ul class="navbar-nav mx-auto" routerLinkActive="active">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" id="serviceMenuDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Service menu
        </a>
        <div class="dropdown-menu" aria-labelledby="serviceMenuDropdown">
          <a class="dropdown-item" routerLink="./tools/services">Services</a>
          <a class="dropdown-item" routerLink="./tools/users">Workers</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" id="carsMenuDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Cars in service
        </a>
        <div class="dropdown-menu" aria-labelledby="carsMenuDropdown">
          <a class="dropdown-item" routerLink="./cars/list">List</a>
          <a class="dropdown-item" routerLink="./cars/add">Add a car</a>
        </div>
      </li>
    </ul>
  </nav>
  <router-outlet></router-outlet>
  `
})
export class ServiceMenuComponent { }
