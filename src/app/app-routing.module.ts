import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';
import {LoginPageResolver} from './login-page/login-page.resolver';
import {AppComponent} from './app.component';
import {HomePageComponent} from './home-page/home-page.component';
import {HomePageResolver} from './home-page/home-page.resolver';

const routes: Routes = [
  {
    path: 'home/:user',
    component: HomePageComponent,
    resolve: { pageData: HomePageResolver },
  },
  {
    path: 'login',
    component: LoginPageComponent,
    resolve: {pageData: LoginPageResolver},
  },
  {
    path: '',
    component: LoginPageComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
