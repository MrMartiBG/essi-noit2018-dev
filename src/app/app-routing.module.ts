import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormLoginComponent } from './forms/form-login.component';
import { FormRegisterComponent } from './forms/form-register.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found.component';

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
     component: NotFoundComponent
   }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes//,
      //{ enableTracing: true}
  	)
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
