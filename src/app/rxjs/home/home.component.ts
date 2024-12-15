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
    label:'Angular',
    route:''
  },
  {
    label:'RXJS',
    route:'/rxjs/home'
  }
]
constructor(public router:Router){}
tapOnItem(item:any){
  this.router.navigate([item?.route])
}
}
