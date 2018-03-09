import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModsMenuComponent } from './mods-menu.component';
import { ModAddComponent } from './mod-add.component';
import { ModsListComponent } from './mods-list.component';

const modsRoutes: Routes = [
  {
    path: 'modifications',
    component: ModsMenuComponent,
    children: [
      {
        path: 'list',
        component: ModsListComponent
      },
      {
        path: 'add',
        component: ModAddComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(modsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ModsRoutingModule { }
