import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    {path:'',component:HomeComponent},
    // {path:'**', redirectTo:'home'},
    { path: 'feature', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule) },
    {path:'rxjs',loadChildren:()=> import('./rxjs/rxjs.module').then(m => m.RxjsModule)}
];
