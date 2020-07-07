import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule}from '@angular/common/http'
import { BrowserAnimationsModule} from'@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
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
    HeaderComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,ToastrModule.forRoot(),BrowserAnimationsModule
  ],
  exports: [
    ResetpasswordComponent,
    LoginComponent,
    SignUpComponent,
    GroupComponent
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
