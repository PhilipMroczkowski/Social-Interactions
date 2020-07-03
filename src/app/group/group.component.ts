import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  id : number;
  groupName: string;
  tags: string[];
  groupCategory : string;
  groupSubCategory : string;
  purpose : string;
  memberType : string;
  groupAdmin : string;
  groupDescription : string;
  groupCount : number;
  groupPhoto : string;

  constructor() { 
    this.groupName = 'sample group name';
    this.tags = ['Gaming', 'Sports', 'Food'];
    this.groupCategory = 'Playing Games';
    this.groupSubCategory = 'Social';
    this.groupAdmin = 'user name';
    this.groupDescription = 'This is a sample group!';
    this.groupPhoto = 'assets/img/gamingtemp.jpg';
  }

  ngOnInit() {
  }

}
