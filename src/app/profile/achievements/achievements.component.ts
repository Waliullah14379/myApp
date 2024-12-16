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
  public achievementData:any
  ngOnInit(): void {
    this.achievementData = [
      {
        "title": "Poster Making",
        "year": 2024,
        "description": "Recognized as 1st prize for poster making and Slogan writing competition on World environment day.",
        "image": "../../../assets/postermaking.jpg",
        "category": "Awards",
        "color": "primary"
      },
      {
        "title": "Rock Star Rookie 2023",
        "year": 2023,
        "description": "Recognized for consistent performance and leadership in the team.",
        "image": "../../../assets/rockstartRookeee.jpg",
        "category": "Innovation",
        "color": "success"
      },
      {
        "title": "Zonal Fest",
        "year": 2020,
        "description": "Awarded for 2nd rank in Zonal fest of AKTU in poster making competition.",
        "image": "../../../assets/aktuArt.jpg",
        "category": "Teamwork",
        "color": "warning"
      }
    ]
    new WOW.WOW().init();  // Initialize WOW.js
  }

}
