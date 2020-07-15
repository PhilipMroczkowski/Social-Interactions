import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GroupComponent } from './group/group.component';
import {CreateGroupComponent} from './create-group/create-group.component';
import { SignUpComponent } from './signup/signup.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


const routes: Routes = [
  { path: 'Login', component: LoginComponent},
  { path: 'SignUp', component: SignUpComponent},
  { path: 'ResetPassword', component: ResetpasswordComponent},
  { path: 'Group', component: GroupComponent }
  { path: 'CreateGroup', component: CreateGroupComponent }

];

@NgModule({

  imports: 
  [RouterModule.forRoot(routes),
  CommonModule,
  BrowserModule,
  FormsModule , 
  ReactiveFormsModule 
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
