import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
public listItems:any=[
  {
    label:'Promise',
    route:'/rxjs/promise'
  },
  {
    label:'Observable',
    route:'/rxjs/observable'
  },
  {
    label:'From Event',
    route:'/rxjs/fromEvent'
  },
  {
    label:'Interval and Timer',
    route:'/rxjs/interval-timer'
  },
  {
    label:'Of and From',
    route:'/rxjs/of-from'
  },
  {
    label:'To Array',
    route:'/rxjs/toArray'
  },
  {
    label:'Map',
    route:'/rxjs/map'
  },
  {
    label:'Filter',
    route:'/rxjs/filter'
  },
  {
    label:'Tap',
    route:'/rxjs/tap'
  },
  {
    label:'Take',
    route:'/rxjs/take'
  },
]
constructor(public router:Router){}
tapOnItem(item:any){
  this.router.navigate([item?.route])
}
}
