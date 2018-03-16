import { Component } from '@angular/core';

@Component({
  template:
  `
  <nav class="navbar navbar-expand navbar-dark" style="background-color: #485056;">
    <ul class="navbar-nav mx-auto" routerLinkActive="active">
      <li class="nav-item"><a class="nav-link" routerLink="./list">Car modifications</a></li>
      <li class="nav-item"><a class="nav-link" routerLink="./add">Add modfications</a></li>
    </ul>
  </nav>
  <router-outlet></router-outlet>
  `
})
export class ModsMenuComponent { }
