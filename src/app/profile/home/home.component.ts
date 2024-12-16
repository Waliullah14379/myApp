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

  public data: any = {
    name: 'Md Waliullah',
    email: 'waliullahr14379@gmail.com',
    mobile: '+91 8084645150',
    address: 'Madhubani, Bihar, India (847227)',
    gender: 'Male',
    dob: '04/01/2000',
    nationality: 'Indian',
    profileDescription: 'Md Waliullah is a Software Developer with 3.7 years of experience in web application development, specializing in Angular, ReactJS, rxjs, and Python. Holding a B.Tech. in Computer Science, he excels in front-end technologies like HTML, CSS, Bootstrap, Ant Design, and TypeScript. Md has experience in API development, integration, and database management with MySQL. Currently, he works at Knowledge Lens, a Rockwell Automation Company, developing web solutions to enhance user experience. Previously, he contributed to Mobiloitte Technologies on various web applications. Passionate about continuous learning, Md is skilled in software development life cycle, performance optimization, and cross-functional team collaboration.',
    skills:['Angular','TypeScript','JavaScript','Rxjs', 'ReactJs','Bootstrap','CSS','HTML','ANT design','ngZorro','Python','MySql','FastAPI']
  }
  constructor(private router: Router) { }

  navigateTo(page: string) {
    this.router.navigate([`profile/${page}`]);
  }
}
