import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeveloperRoutingModule } from './developer-routing.module';
import { DeveloperDashboardComponent } from './components/developer-dashboard/developer-dashboard.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { DevNavBarComponent } from './components/dev-nav-bar/dev-nav-bar.component';


@NgModule({
  declarations: [
    DeveloperDashboardComponent,
    DevNavBarComponent
  ],
  imports: [
    CommonModule,
    DeveloperRoutingModule,
    AngularMaterialModule,
    FontAwesomeModule,
    HttpClientModule,
    MatSidenavModule

  ]
})
export class DeveloperModule { }
