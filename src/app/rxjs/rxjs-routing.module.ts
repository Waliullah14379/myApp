import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromicesComponent } from './promices/promices.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'promices', component:PromicesComponent},
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
