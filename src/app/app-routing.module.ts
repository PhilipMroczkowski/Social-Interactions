import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signup/signup.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


const routes: Routes = [
  { path: 'Login', component: LoginComponent},
  { path: 'Sign Up', component: SignUpComponent},
  { path: 'Reset Password', component: ResetpasswordComponent}

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
