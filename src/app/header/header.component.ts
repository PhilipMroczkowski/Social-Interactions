import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: User;
  users = [];
  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService
) {
    this.currentUser = this.authenticationService.currentUserValue;
}
  ngOnInit() {
  }

}
