import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { AchievementsComponent } from './achievements/achievements.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  { path: 'projects', component: ProjectsComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'achievements', component: AchievementsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
