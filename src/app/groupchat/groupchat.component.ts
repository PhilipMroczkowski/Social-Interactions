import { Component, OnInit } from '@angular/core';
import { GroupComponent } from '../group/group.component';
import {Group} from '../group/group';


@Component({
  selector: 'app-groupchat',
  templateUrl: './groupchat.component.html',
  styleUrls: ['./groupchat.component.css']
})
export class GroupchatComponent implements OnInit {

  id : number;
  requestToJoin : boolean;
  members : number;
  groupName : Group["name"];
  groupId : Group["id"];

  constructor() { }

  ngOnInit() {
  }

}
