import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebprojectsComponent } from './components/webprojects/webprojects.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pabloTP',
    pathMatch: 'full'
  },
  {
    path: 'pabloTP',
    component: HomeComponent
  },
  {
    path: 'portfolio',
    component: WebprojectsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
