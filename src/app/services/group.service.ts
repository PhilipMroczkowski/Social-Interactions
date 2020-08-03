import { Injectable } from '@angular/core';
import { Group } from '../group/group';
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
  const body:Group=group;

  return this.http.post(this.rootUrl + '/group/create', body);
}

getGroup(id): Observable<Group[]> {
  return this.http.get<Group[]>(this.url + id);
}

getAllGroups(): Observable<Group[]>{
  return this.http.get<Group[]>(this.url);
}
}
