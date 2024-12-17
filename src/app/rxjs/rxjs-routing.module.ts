import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromicesComponent } from './promices/promices.component';
import { HomeComponent } from './home/home.component';
import { ObservableComponent } from './observable/observable.component';
import { FromEventComponent } from './from-event/from-event.component';
import { IntervalTimerComponent } from './interval-timer/interval-timer.component';
import { OfFromComponent } from './of-from/of-from.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { MapComponent } from './map/map.component';
import { FilterComponent } from './filter/filter.component';
import { TapComponent } from './tap/tap.component';
import { TakeComponent } from './take/take.component';

const routes: Routes = [
  {path:'promise', component:PromicesComponent},
  {path:'home',component:HomeComponent},
  {path:'observable', component:ObservableComponent},
  {path:'fromEvent', component:FromEventComponent},
  {path:'interval-timer', component:IntervalTimerComponent},
  {path:'of-from', component:OfFromComponent},
  {path:'toArray', component:ToArrayComponent},
  {path:'map', component:MapComponent},
  {path:'filter', component:FilterComponent},
  {path:'tap', component:TapComponent},
  {path:'take', component:TakeComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
