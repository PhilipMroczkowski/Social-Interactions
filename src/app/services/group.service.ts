import { Injectable } from '@angular/core';
import { Group } from '../models/group';
import {Observable, of} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  
  readonly rootUrl='http://localhost:64493';
  constructor(private http: HttpClient) { }

  private url = 'https://lit-ocean-67937.herokuapp.com/group/'

group:Group;

createGroup(group:Group){
  this.generateGroup(group);

  return this.http.post(this.url + 'create', group);
}

getGroup(id): Observable<Group[]> {
  return this.http.get<Group[]>(this.url + id);
}

getAllGroups(): Observable<Group[]>{
  return this.http.get<Group[]>(this.url);
}

editGroup(group:Group){
  return this.http.put(this.url + 'group/' + group.id, group)
}

generateGroup(group: Group): Group{
  group.numMembers = 1;
  group.admin = 'User';

  return group;
}
}
