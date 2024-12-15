import { Component, OnInit } from '@angular/core';
declare var WOW: any;

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit{
  ngOnInit(): void {
    new WOW().init(); // Initialize WOW.js for animations
  }

}
