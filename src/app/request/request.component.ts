import { Component, OnInit } from '@angular/core';
import { GroupComponent } from '../group/group.component';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

//group requests

requestorName : string;
status : string;
groupName : GroupComponent['groupName'];
requestDate : Date = new Date((Date.now()));

  constructor() { }

  ngOnInit() {
  }

}
