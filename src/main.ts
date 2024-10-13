// src/main.ts

import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './app/components/pages/home/home.component'; // Certifique-se de ter o HomeComponent
import { SobreComponent } from './app/components/pages/sobre/sobre.component';
import { LoginComponent } from './app/components/pages/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: SobreComponent},
  { path: 'login', component: LoginComponent},
  // Adicione outras rotas aqui
  { path: '**', redirectTo: '' } // Redireciona para Home em rotas não encontradas
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
})
  .catch(err => console.error(err));
