import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: User;
  users = [];
  userSubscription: any;
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private ur: UserService) 
    {
    
this.userSubscription = this.authenticationService.currentUser
.subscribe(user => {
  this.currentUser = user;
})


}


logout() {
  this.authenticationService.logout();
  this.router.navigate(['/login']);
}

  ngOnInit() {

  }

routeUser(id: number){
  this.router.navigate(['/user/', id]);

}


}
