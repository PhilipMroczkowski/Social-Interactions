import { Component, OnInit } from '@angular/core';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-confirmaccount',
  templateUrl: './confirmaccount.component.html',
  styleUrls: ['./confirmaccount.component.css']
})
export class ConfirmaccountComponent implements OnInit {

  phone : UserComponent['phone'];
  email : UserComponent['email'];

  constructor() { }

  ngOnInit() {
  }

}
