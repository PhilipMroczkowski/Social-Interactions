import { Injectable } from '@angular/core';
import { Group } from './group';
import {Observable, of} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { }

  private url = 'https://lit-ocean-67937.herokuapp.com/group/'


getGroup(id): Observable<Group[]> {
  return this.http.get<Group[]>(this.url + id);
}
}
