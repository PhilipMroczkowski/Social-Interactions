import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS }from '@angular/common/http'
import { BrowserAnimationsModule} from'@angular/platform-browser/animations';
import { ReactiveFormsModule }    from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './signup/signup.component';
import { ConfirmaccountComponent } from './confirmaccount/confirmaccount.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { GroupComponent } from './group/group.component';

import { EventComponent } from './event/event.component';
import { EventpicturesComponent } from './eventpictures/eventpictures.component';
import { HeaderComponent } from './header/header.component';
import { UserService } from './services/user.service';
import { GroupService } from './services/group.service';
import { CreateGroupComponent } from './create-group/create-group.component';
//import { routing }        from './app-routing';
import { MapComponent } from './map/map.component';
import { CalendarComponent } from './calendar/calendar.component';
import { GoogleMapsModule } from '@angular/google-maps';

import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { AlertComponent } from './components/alert.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { GroupDashboardComponent } from './group-dashboard/group-dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { EditGroupComponent } from './edit-group/edit-group.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    GoogleMapsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatRadioModule
   // routing
  ],
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    ConfirmaccountComponent,

    ResetpasswordComponent,
    GroupComponent,

    EventComponent,
    EventpicturesComponent,
    HeaderComponent,

    CreateGroupComponent,

    MapComponent,
    CalendarComponent,
    CreateEventComponent,
    GroupDashboardComponent,
    PageNotFoundComponent,
    HomeComponent,
    FooterComponent,
    AboutUsComponent,
    EditGroupComponent

  ],

  exports: [
    ResetpasswordComponent,
    LoginComponent,
    RegisterComponent,
    GroupComponent,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ], 
  providers: [UserService, GroupService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
