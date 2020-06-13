import { Component, OnInit } from '@angular/core';
import { UserComponent } from '../user/user.component';


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
