import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServiceCarAddComponent } from './service-car-add.component';
import { ServiceCarListComponent } from './service-car-list.component';
import { ServiceCarComponent } from './service-car.component';
import { ServiceUserListComponent} from './service-user-list.component';
import { ServiceToolsComponent } from './service-tools.component';
import { ServiceCreateServiceComponent } from './service-create-service.component';

import { ServiceMenuComponent } from './service-menu.component';


const serviceRoutes: Routes = [
  {
    path: 'service',
    component: ServiceMenuComponent,
    children: [
      {
        path: 'cars',
        component: ServiceCarComponent,
        children: [
          {
            path: 'list',
            component: ServiceCarListComponent
          },
          {
            path: 'add',
            component: ServiceCarAddComponent
          }
        ]
      },
      {
        path: 'tools',
        component: ServiceToolsComponent,
        children: [
          {
            path: 'services',
            component: ServiceCreateServiceComponent
          },
          {
            path: 'add',
            component: ServiceCarAddComponent
          }
        ]
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
