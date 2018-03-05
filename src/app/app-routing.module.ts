import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormRegisterComponent } from './form-register/form-register.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
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
  imports: [RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
