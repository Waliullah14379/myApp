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

public data:any={
  name:'Md Waliullah',
  email:'waliullahr14379@gmail.com',
  mobile:'+91 8084645150',
  address:'Madhubani, Bihar, India (847227)',
  gender:'Male',
  dob:'04/01/2000',
  nationality:'Indian',
  profileDescription:''
}
  constructor(private router: Router) {}

  navigateTo(page: string) {
    this.router.navigate([`profile/${page}`]);
  }
}
