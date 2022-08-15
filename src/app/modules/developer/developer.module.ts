import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeveloperRoutingModule } from './developer-routing.module';
import { DeveloperDashboardComponent } from './components/developer-dashboard/developer-dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { DevNavBarComponent } from './components/dev-nav-bar/dev-nav-bar.component';
import { AngularMaterialModule } from "../../angular-material.module";
import { MatCardModule } from '@angular/material/card';
import { DevHomeComponent } from './components/dev-home/dev-home.component';
import { DevProjectDetailsComponent } from './components/dev-project-details/dev-project-details.component';
import { ProjectWorksComponent } from './components/project-works/project-works.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DeveloperDashboardComponent,
    DevNavBarComponent,
    DevHomeComponent,
    DevProjectDetailsComponent,
    ProjectWorksComponent
  ],
  imports: [
    CommonModule,
    DeveloperRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    MatSidenavModule,
    AngularMaterialModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class DeveloperModule { }
