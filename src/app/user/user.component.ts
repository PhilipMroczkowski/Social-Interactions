import { Component, OnInit } from '@angular/core';
import {LoginComponent} from '../login/login.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../services/alert.service';
import { UserService } from '../services/user.service';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  id : number;
  name : string[];
  //username : LoginComponent["username"];
  //password : LoginComponent["password"];
  eventSet : string[];
  groupSet : string[];
  interests : string[];
  email: string;
  phone : string;
  address: string[];
  postalCode : string;
  joinedGroups : string[];
  birthDate : Date = new Date();
  paramSubscription: any;
  userSubscription: any;
  user: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService,
    private ar: ActivatedRoute
  ) { }

  ngOnInit() {
    this.paramSubscription = this.ar.params.subscribe(params => {
      this.id = params['_id'],
      function(err){ console.log('unable to get id');}
    })

    this.userSubscription = this.userService.getById(this.id)
    .subscribe(
      user => this.user = user[0],
      function(err) {
        console.log('unable to get user');
      }
    );

  }

  routeUser(id: number){
    this.router.navigate(['/user/edit/', id]);
  }

}
