import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ProjectManagerRoutingModule } from './project-manager-routing.module';
import { ProjectManagerDashboardComponent } from './components/project-manager-dashboard/project-manager-dashboard.component';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { HomeComponent } from './components/home/home.component';
import { AllProjectsComponent } from './components/all-projects/all-projects.component';
import { AngularMaterialModule   } from "../../angular-material.module";
import { MatSidenavModule } from '@angular/material/sidenav';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { EditProjectComponent } from './components/edit-project/edit-project.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';



@NgModule({
  declarations: [
    ProjectManagerDashboardComponent,
    NavBarComponent,
    HomeComponent,
    AllProjectsComponent,
    CreateProjectComponent,
    AllUsersComponent,
    EditProjectComponent,
    ProjectDetailsComponent
  ],
  imports: [
    CommonModule,
    ProjectManagerRoutingModule,
    AngularMaterialModule,
    MatSidenavModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
})
export class ProjectManagerModule { }
