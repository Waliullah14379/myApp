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
  public projectData:any
  ngOnInit(): void {
    new WOW().init(); // Initialize WOW.js for animations
    this.projectData = [
      {
        "title": "RTDMS",
        "duration": "432 Days",
        "client": "Central Pollution Control Board (CPCB)",
        "description": "The RTDMS project is designed to monitor and address pollution across various environmental sectors in India, including air, water, and forests. The system features a registration portal, an admin portal, and an industry portal. The frontend is developed using Angular and Angular Zorro, while the backend is implemented in Python.",
        "frontend": "Angular, ng Zorro, chart.js, map.io",
        "backend": "Python",
        "category": "Environmental Monitoring",
        "image": "../../../assets/cpcb.png"
      },
      {
        "title": "Curation and Annotation Tool",
        "duration": "62 Days",
        "client": "ZS Associates",
        "description": "This tool, built with Angular, focuses on automating the annotation of medical science reports. Its primary function is to streamline the process of annotating and curating these reports.",
        "frontend": "Angular",
        "backend": "Python, FastAPI, MySQL",
        "category": "Medical Science",
        "image": "../../../assets/zs.png",
      },
      {
        "title": "Braincase",
        "duration": "214 Days",
        "client": "ZS Associates",
        "description": "Braincase is a medical project that includes modules for user management, project management, and project creation, divided into seven interconnected sub-sections. The frontend is developed using React.js, Ant Design, and React Bootstrap, while the backend relies on Python, FastAPI, and MySQL. As a frontend developer, I contributed significantly to the functionality of this project.",
        "frontend": "React.js, Ant Design, React Bootstrap",
        "backend": "Python, FastAPI, MySQL",
        "category": "Medical Project",
        "image": "../../../assets/zs.png",
      }
    ]
    
    
  }

}
