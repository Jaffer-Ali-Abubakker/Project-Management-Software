import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { LandingPageComponent } from './auth/landing-page/landing-page.component';




const routes: Routes = [
  {path: "", component: LandingPageComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "",redirectTo: "/", pathMatch:'full' },
  {path: "developer", loadChildren: () => import('./modules/developer/developer.module').then((m)=> m.DeveloperModule),},
  {path: "project-manager", loadChildren: () => import('./modules/project-manager/project-manager.module').then((m)=> m.ProjectManagerModule),},
  {path: "submitter", loadChildren: () => import('./modules/submitter/submitter.module').then((m)=> m.SubmitterModule),},
 
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
