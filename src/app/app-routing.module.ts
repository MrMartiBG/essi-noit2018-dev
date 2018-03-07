import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormRegisterComponent } from './form-register/form-register.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CarMenuComponent } from './car-menu/car-menu.component';
import { CarAddComponent } from './car-add/car-add.component';

const routes: Routes = [
  {
    path: 'cars/add',
    component: CarAddComponent
  },
  {
    path: 'cars/list',
    component: CarsListComponent
  },
  {
     path: 'home',
     component: HomeComponent
  },
  {
    path: 'login',
    component: FormLoginComponent
  },
  {
    path: 'register',
    component: FormRegisterComponent
  },
  {
    path: 'cars',
    component: CarMenuComponent
  },
  {
     path: '',
     redirectTo: '/home',
     pathMatch: 'full'
   },
   {
     path: '**',
     redirectTo: '/home',
     pathMatch: 'full'
   }
];

@NgModule({
  imports: [RouterModule.forRoot(
      routes,
      { enableTracing: true}
    	)
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
