import { Component, OnInit } from '@angular/core';
import {UserComponent} from '../user/user.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId : UserComponent["id"];
  username : string;
  password : string;


  constructor() { }

  ngOnInit() {
  }

}
