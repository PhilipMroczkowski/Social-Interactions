import { Component, OnInit } from '@angular/core';
import {UserComponent} from '../user/user.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  name : UserComponent['name'];
  eventSet : UserComponent['eventSet'];
  groupSet : UserComponent['eventSet']
  interests : UserComponent['interests'];
  profilePicture : string;

  constructor() { }

  ngOnInit() {
  }

}
