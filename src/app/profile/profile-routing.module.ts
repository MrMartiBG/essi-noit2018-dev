import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { ProfileCarsComponent } from './profile-cars.component';
import { ProfileModsComponent } from './profile-mods.component';
import { ProfileNotifComponent } from './profile-notif.component';
import { ProfileDataComponent } from './profile-data.component';

const profileRoutes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      {
        path: 'data',
        component: ProfileDataComponent
      },
      {
        path: 'cars',
        component: ProfileCarsComponent
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
