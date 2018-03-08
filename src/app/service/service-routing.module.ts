import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServiceMenuComponent } from './service-menu.component';
import { ServiceListComponent } from './service-list.component';
import { ServiceAddComponent } from './service-add.component';

const serviceRoutes: Routes = [
  {
    path: 'service',
    component: ServiceMenuComponent,
    children: [
      {
        path: 'list',
        component: ServiceListComponent
      },
      {
        path: 'add',
        component: ServiceAddComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(serviceRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ServiceRoutingModule { }
