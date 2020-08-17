import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { MapComponent } from './map/map.component';
import {HttpClientModule} from '@angular/common/http';
// import { HttpModule }    from '@angular/http';
import {AgmCoreModule} from '@agm/core';
import { AboutComponent } from './about/about.component';
import {MapService} from './services/map.service';
import { CoursesComponent } from './courses/courses.component';
import { AdminComponent } from './admin/admin.component';
import { PreviousLocationComponent } from './previous-location/previous-location.component';
import { SchoolComponent } from './school/school.component';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { GoogleMapComponent } from './google-map/google-map.component';
import { ExecuteOnCmdComponent } from './execute-on-cmd/execute-on-cmd.component';
import { CameraComponent } from './camera/camera.component';
import { ActivityComponent } from './activity/activity.component';
import { AdminMessageComponent } from './admin-message/admin-message.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    MapComponent,
    ContactComponent,
    FooterComponent,
    NavbarComponent,
    AboutComponent,
    CoursesComponent,
    AdminComponent,
    PreviousLocationComponent,
    SchoolComponent,
    GoogleMapComponent,
    ExecuteOnCmdComponent,
    CameraComponent,
    ActivityComponent,
    AdminMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AngularFontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AgmJsMarkerClustererModule ,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyCKv_AKoOZErQwdb-CxJORrZMoooMWgHr8'
    })
  ],
  providers: [MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
