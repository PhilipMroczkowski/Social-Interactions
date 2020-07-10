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

getGroup(): void{}
}
