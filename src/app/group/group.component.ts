import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  id : number;
  groupName: string;
  tags: string;
  groupCategory : string;
  groupSubCategory : string;
  purpose : string;
  memberType : string;
  groupAdmin : string;
  groupDescription : string;
  groupCount : number;
  groupPhoto : string;

  constructor() { }

  ngOnInit() {
  }

}
