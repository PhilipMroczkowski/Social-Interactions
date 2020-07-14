import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onetimeuse',
  templateUrl: './onetimeuse.component.html',
  styleUrls: ['./onetimeuse.component.css']
})
export class OnetimeuseComponent implements OnInit {

  oneTimePassword : string;
  oneTimeLink : string;

  constructor() { }

  ngOnInit() {
  }

}
