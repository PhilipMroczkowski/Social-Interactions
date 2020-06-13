import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmaccount',
  templateUrl: './confirmaccount.component.html',
  styleUrls: ['./confirmaccount.component.css']
})
export class ConfirmaccountComponent implements OnInit {

  userName : string;
  password: string;

  constructor() { }

  ngOnInit() {
  }

}
