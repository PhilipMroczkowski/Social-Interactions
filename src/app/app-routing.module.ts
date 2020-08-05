import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GroupComponent } from './group/group.component';
import {GroupDashboardComponent} from './group-dashboard/group-dashboard.component'
import {CreateGroupComponent} from './create-group/create-group.component';
import { RegisterComponent } from './signup/signup.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {ProfileComponent } from './profile/profile.component'
import { UserComponent } from './user/user.component';
import { EventComponent } from './event/event.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component'
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: RegisterComponent},
  { path: 'resetpassword', component: ResetpasswordComponent},
  { path: 'group', component: GroupComponent}, 
  { path: 'creategroup', component: CreateGroupComponent},
  { path: 'groups', component: GroupDashboardComponent},
  {path: 'creategroup', component: CreateGroupComponent},
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'events' , component: EventComponent},
  { path: '' , component: LoginComponent},
  //{ path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}

];


@NgModule({
  declarations: [],
  imports: [
  CommonModule,
  RouterModule.forRoot(routes),
  BrowserModule,
  FormsModule , 
  ReactiveFormsModule 
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
