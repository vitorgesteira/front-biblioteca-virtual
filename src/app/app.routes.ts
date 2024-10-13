import { NgModule } from '@angular/core';
import {  RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { SobreComponent } from './components/pages/sobre/sobre.component';
import { LoginComponent } from './components/pages/login/login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' } // Redireciona para Home em rotas não encontradas
];

