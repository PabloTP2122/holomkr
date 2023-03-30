import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebprojectsComponent } from './components/webprojects/webprojects.component';

const routes: Routes = [
  {
    path: 'web',
    component: WebprojectsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
