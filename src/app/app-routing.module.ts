import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoServicesComponent } from './demo/demo-services/demo-services.component'

const routes: Routes = [
  { path: 'demo', component: DemoServicesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
