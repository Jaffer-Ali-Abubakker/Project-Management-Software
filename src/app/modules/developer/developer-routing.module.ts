import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevHomeComponent } from './components/dev-home/dev-home.component';
import { DevProjectDetailsComponent } from './components/dev-project-details/dev-project-details.component';
import { DeveloperDashboardComponent } from './components/developer-dashboard/developer-dashboard.component';
import { ProjectWorksComponent } from './components/project-works/project-works.component';

const routes: Routes = [
  {path: '', component: DeveloperDashboardComponent,
  
  children:[

    {path:'home', component: DevHomeComponent},
    {path: 'projectDetails', component: DevProjectDetailsComponent},
    {path: 'projectWork', component: ProjectWorksComponent},
    {path:'',redirectTo:'/developer/home', pathMatch:'full'},
  ],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],   
  exports: [RouterModule]
})
export class DeveloperRoutingModule { }
