import { Component, OnInit } from '@angular/core';
declare var WOW: any;

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.scss'
})
export class AchievementsComponent implements OnInit{
  ngOnInit(): void {
    new WOW.WOW().init();  // Initialize WOW.js
  }

}
