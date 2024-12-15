import { Component, OnInit } from '@angular/core';
declare var WOW: any;

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit{
  ngOnInit(): void {
    new WOW().init(); // Initialize WOW.js for animations
  }

}
