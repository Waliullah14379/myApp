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
  public experienceData:any=[
    {
      "company": "Knowledge Lens, A Rockwell Automation Company",
      "position": "Software Developer",
      "duration": "January 2022 - December 2024",
      "responsibilities": [
        "Spearheading the development of innovative web applications utilizing Angular and React, ensuring seamless user experiences.",
        "Collaborating with cross-functional teams to gather requirements, define project scope, and deliver solutions that align with business objectives.",
        "Engaging in code reviews and providing constructive feedback to peers.",
        "Implementing best practices in software development, including version control, testing, and deployment.",
        "Conducting thorough testing and debugging of applications to ensure optimal performance.",
        "Mentoring junior developers and fostering a skilled team environment."
      ],
      "image": "../../../assets/kl.png"
    },
    {
      "company": "Mobiloitte Technologies",
      "position": "Software Developer",
      "duration": "March 2021 – November 2021",
      "responsibilities": [
        "Developed web applications using Angular, contributing to user-friendly interfaces and functionalities.",
        "Collaborated with project managers and stakeholders to define project requirements.",
        "Integrated third-party APIs to enhance application capabilities.",
        "Participated in rigorous testing and debugging, ensuring high-quality deliverables.",
        "Developed and maintained technical documentation for all projects.",
        "Assisted in the migration of legacy systems to modern web applications.",
        "Engaged in regular code refactoring sessions to improve code maintainability."
      ],
      "image": "../../../assets/mobiloitte.png"
    }
  ]
  
  ngOnInit(): void {
    new WOW().init(); // Initialize WOW.js for animations
  }

}
