import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from '../models/event';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private url: string = "https://lit-ocean-67937.herokuapp.com/event/";

  constructor(private http: HttpClient) { }

  getAllEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.url);
  }

  getEvent(id: number): Observable<Event> {
    return this.http.get<Event>(this.url + id);
  }
}
