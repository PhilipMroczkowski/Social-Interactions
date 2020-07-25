import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { OnetimeuseComponent } from './onetimeuse/onetimeuse.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ProfileComponent } from './profile/profile.component';
import { GroupComponent } from './group/group.component';
import { RequestComponent } from './request/request.component';
import { GroupchatComponent } from './groupchat/groupchat.component';
import { MessageComponent } from './message/message.component';
import { EventComponent } from './event/event.component';
import { EventpicturesComponent } from './eventpictures/eventpictures.component';
import { HeaderComponent } from './header/header.component';
import { UserService } from './services/user.service';
import { GroupService } from './shared/group.service';
import { CreateGroupComponent } from './create-group/create-group.component';
//import { routing }        from './app-routing';
import { MapComponent } from './map/map.component';
import { CalendarComponent } from './calendar/calendar.component';
import { GoogleMapsModule } from '@angular/google-maps';

import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { AlertComponent } from './components/alert.component';


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
   // routing
  ],
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    ConfirmaccountComponent,
    OnetimeuseComponent,
    ResetpasswordComponent,
    ProfileComponent,
    GroupComponent,
    RequestComponent,
    GroupchatComponent,
    MessageComponent,
    EventComponent,
    EventpicturesComponent,
    HeaderComponent,

    CreateGroupComponent,

    MapComponent,
    CalendarComponent

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
