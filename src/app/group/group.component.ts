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
    this.group = this.groupService.getGroup();
  }

}
