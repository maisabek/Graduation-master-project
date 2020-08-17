import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { AboutComponent } from './about/about.component';
import {CoursesComponent} from './courses/courses.component';
import {AdminComponent} from './admin/admin.component';
import {PreviousLocationComponent} from './previous-location/previous-location.component'
import {SchoolComponent} from './school/school.component'
const routes: Routes = [
  //  {path:'',component:HomeComponent},
   {path:'',redirectTo:'/home',pathMatch:'full'},
   {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'gpsdata/:id',component:MapComponent},
  {path:'about',component:AboutComponent},
  {path:'courses',component:CoursesComponent},
  {path:'admin',component:AdminComponent},
  {path:'previous/:id',component:PreviousLocationComponent},
  {path:'school',component:SchoolComponent}
  // routerLink='/contact' routerLinkActive='c'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
