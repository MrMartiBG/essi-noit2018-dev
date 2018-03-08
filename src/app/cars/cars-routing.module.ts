import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarMenuComponent } from './car-menu.component';
import { CarsListComponent }    from './cars-list.component';
import { CarAddComponent }  from './car-add.component';

const carsRoutes: Routes = [
  {
    path: 'cars',
    component: CarMenuComponent,
    children: [
      {
        path: 'list',
        component: CarsListComponent
      },
      {
        path: 'add',
        component: CarAddComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(carsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CarsRoutingModule { }
