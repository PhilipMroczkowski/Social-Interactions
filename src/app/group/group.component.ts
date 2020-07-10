import { Component, OnInit, Injectable } from '@angular/core';
import {GroupService} from '../shared/group.service';
import {Group} from '../shared/group';



@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
@Injectable()
export class GroupComponent implements OnInit {

  

  constructor(public groupService:GroupService, public group:Group) { 
  }

  ngOnInit() {
    console.log("Loaded successfully!");
    this.group = this.getGroup();
  }

  getGroup(): Group {
    group:Group;
    return this.group;
  }

}
