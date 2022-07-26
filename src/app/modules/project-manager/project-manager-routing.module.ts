import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProjectsComponent } from './components/all-projects/all-projects.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { EditProjectComponent } from './components/edit-project/edit-project.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { ProjectManagerDashboardComponent } from './components/project-manager-dashboard/project-manager-dashboard.component';

const routes: Routes = [
  {path:'', component: ProjectManagerDashboardComponent,

  children:[
    { path: 'home', component:HomeComponent },
    { path: 'all-projects', component:AllProjectsComponent},
    { path: 'create-project', component:CreateProjectComponent},
    { path: 'all-users', component:AllUsersComponent},
    { path: 'Edit-Project', component:EditProjectComponent},
    { path: 'Project-Details', component: ProjectDetailsComponent},

    { path: '', redirectTo: '/project-manager/home', pathMatch: 'full' },
    
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectManagerRoutingModule { }
