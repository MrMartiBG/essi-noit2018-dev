import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WorkshopComponent } from './workshop.component';
import { WorkshopCarsComponent } from './cars/workshop-cars.component';
import { WorkshopCarsListComponent } from './cars/workshop-cars-list.component';
import { WorkshopModsComponent } from './mods/workshop-mods.component';
import { WorkshopModsListComponent } from './mods/workshop-mods-list.component';
import { WorkshopModsAddComponent } from './mods/workshop-mods-add.component';

const workshopRoutes: Routes = [
  {
    path: 'workshop',
    component: WorkshopComponent,
    children: [
      {
        path: 'cars',
        component: WorkshopCarsComponent,
        children: [
          {
            path: 'list',
            component: WorkshopCarsListComponent
          }
        ]
      },
      {
        path: 'mods',
        component: WorkshopModsComponent,
        children: [
          {
            path: 'list',
            component: WorkshopModsListComponent
          },
          {
            path: 'add',
            component: WorkshopModsAddComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(workshopRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class WorkshopRoutingModule { }
