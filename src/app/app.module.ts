import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
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

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    SignupComponent,
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
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    ResetpasswordComponent,
    LoginComponent,
    SignupComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
