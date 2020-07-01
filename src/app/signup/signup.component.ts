import { Component, OnInit, NgModule } from '@angular/core';
import { UserComponent } from '../user/user.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule , 
    ReactiveFormsModule
  ],
})
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  user : UserComponent[];

  constructor() { }

  ngOnInit() {
  }

}
