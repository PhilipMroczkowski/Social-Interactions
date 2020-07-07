import { Injectable } from '@angular/core';
import { Group } from './group';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor() { }

  group:Group={
  id : null,
  groupName: null,
  tags:null,
  groupCategory : null,
  groupSubCategory : null,
  purpose : null,
  memberType : null,
  groupAdmin : null,
  groupDescription : null,
  groupCount : null,
  groupPhoto : null
  }

getGroup(){
  const body:Group={
    groupName :'sample group name',
    tags :['Gaming', 'Sports', 'Food'],
    groupCategory :'Playing Games',
    groupSubCategory: 'Social',
    groupAdmin: 'user name',
    groupDescription: 'This is a sample group!',
    groupPhoto : '../assets/img/gamingtemp.jpg',
    id : 9999999,
    purpose : 'Local Gaming Tournaments',
    memberType : null,
    groupCount : 9999999999
  }
  return body;

  
  }
}
