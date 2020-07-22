import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { AppRoutingModule } from './app-routing.module';
=======
>>>>>>> ca86f487b2b3a8e5c3f9c103958476488e22146d
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }from '@angular/common/http'
import { BrowserAnimationsModule} from'@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signup/signup.component';
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
import { UserService } from './shared/user.service';
import { GroupService } from './shared/group.service';
//<<<<<<< HEAD
import { CreateGroupComponent } from './create-group/create-group.component';
//=======
import { MapComponent } from './map/map.component';
import { CalendarComponent } from './calendar/calendar.component';
import { GoogleMapsModule } from '@angular/google-maps';
//>>>>>>> bc4c6dbb6f05e1fc558f1ae83c27f5dd7cf4285a

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    SignUpComponent,
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
//<<<<<<< HEAD
    CreateGroupComponent,
//=======
    MapComponent,
    CalendarComponent
//>>>>>>> bc4c6dbb6f05e1fc558f1ae83c27f5dd7cf4285a
  ],
  imports: [
<<<<<<< HEAD
    BrowserModule,AppRoutingModule, FormsModule,HttpClientModule,ToastrModule.forRoot(),BrowserAnimationsModule, GoogleMapsModule
=======
    BrowserModule,FormsModule,HttpClientModule,ToastrModule.forRoot(),BrowserAnimationsModule, GoogleMapsModule
>>>>>>> ca86f487b2b3a8e5c3f9c103958476488e22146d
  ],
  exports: [
    ResetpasswordComponent,
    LoginComponent,
    SignUpComponent,
<<<<<<< HEAD
    GroupComponent,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ], 
=======
    GroupComponent
  ],
>>>>>>> ca86f487b2b3a8e5c3f9c103958476488e22146d
  providers: [UserService, GroupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
