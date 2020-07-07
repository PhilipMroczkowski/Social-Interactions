import { Component, OnInit } from '@angular/core';
import {GroupService} from '../shared/group.service';
import {Group} from '../shared/group';


@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  

  constructor(public groupService:GroupService, public group:Group) { 
  }

  ngOnInit() {
    console.log("Loaded successfully!");
    this.getGroup();
  }

  getGroup(): void {
    this.group = this.groupService.getGroup();
  }

}
