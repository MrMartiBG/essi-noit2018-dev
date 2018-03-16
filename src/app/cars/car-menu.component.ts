import { Component } from '@angular/core';

@Component({
  template:
  `
  <nav class="navbar navbar-expand navbar-dark" style="background-color: #485056;">
    <ul class="navbar-nav mx-auto" routerLinkActive="active">
        <li class="navbar-nav"><a class="nav-link" routerLink="./list">My cars</a></li>
        <li class="navbar-nav"><a class="nav-link" routerLink="./add">Add car</a></li>
    </ul>
  </nav>
  <router-outlet></router-outlet>
  `
})
export class CarMenuComponent { }
