import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { ProfileCarsComponent } from './cars/profile-cars.component';
import { ProfileCarsListComponent } from './cars/profile-cars-list.component';
import { ProfileCarsAddComponent } from './cars/profile-cars-add.component';
import { ProfileCarsEditComponent } from './cars/profile-cars-edit.component';
import { ProfileCarsShopComponent } from './cars/profile-cars-shop.component';
import { ProfileModsComponent } from './profile-mods.component';
import { ProfileNotifComponent } from './profile-notif.component';
import { ProfileDataComponent } from './data/profile-data.component';
import { ProfileDataBasicComponent } from './data/profile-data-basic.component';
import { ProfileDataAdditionalComponent } from './data/profile-data-additional.component';
import { ProfileDataPassComponent } from './data/profile-data-pass.component';

const profileRoutes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      {
        path: 'data',
        component: ProfileDataComponent,
        children: [
          {
            path: 'basic',
            component: ProfileDataBasicComponent
          },
          {
            path: 'additional',
            component: ProfileDataAdditionalComponent
          },
          {
            path: 'pass',
            component: ProfileDataPassComponent
          }
        ]
      },
      {
        path: 'cars',
        component: ProfileCarsComponent,
        children: [
          {
            path: 'list',
            component: ProfileCarsListComponent
          },
          {
            path: 'add',
            component: ProfileCarsAddComponent
          },
          {
            path: 'edit',
            component: ProfileCarsEditComponent
          },
          {
            path: 'shop',
            component: ProfileCarsShopComponent
          }
        ]
      },
      {
        path: 'mods',
        component: ProfileModsComponent
      },
      {
        path: 'notif',
        component: ProfileNotifComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(profileRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProfileRoutingModule { }
