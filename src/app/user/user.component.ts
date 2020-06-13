import { Component, OnInit } from '@angular/core';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  id : number;
  name : string[];
  username : LoginComponent["username"];
  password : LoginComponent["password"];
  eventSet : string[];
  groupSet : string[];
  interests : string[];
  email: string;
  phone : string;
  address: string[];
  postalCode : string;
  joinedGroups : string[];
  birthDate : Date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
