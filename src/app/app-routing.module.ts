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
import { UserComponent } from './user/user.component';
import { EventComponent } from './event/event.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component'
import { AuthGuard } from './guards/auth.guard';
import { EditGroupComponent } from './edit-group/edit-group.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { EventDashboardComponent } from './event-dashboard/event-dashboard.component';


const routes: Routes = [
  
  { path: 'login', component: LoginComponent},
  { path: 'aboutus', component: AboutUsComponent},
  { path: 'home', component: HomeComponent},
  { path: 'signup', component: RegisterComponent},
  { path: 'resetpassword', component: ResetpasswordComponent},
  { path: 'group/:_id', component: GroupComponent, canActivate: [AuthGuard] }, 
  { path: 'group/:_id/events', component: EventDashboardComponent, canActivate: [AuthGuard] },
  { path: 'group/:_id/events/:_id', component: EventComponent, canActivate: [AuthGuard] },
  { path: 'creategroup', component: CreateGroupComponent, canActivate: [AuthGuard] },
  { path: 'groups', component: GroupDashboardComponent, canActivate: [AuthGuard] },
  { path: 'editgroup/:_id', component: EditGroupComponent, canActivate: [AuthGuard] },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'events' , component: EventComponent},
  { path: '' , component: HomeComponent},
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
