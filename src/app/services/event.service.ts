import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from '../models/event';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private url: string = "https://lit-ocean-67937.herokuapp.com/";

  constructor(private http: HttpClient) { }

  getAllEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.url + "event/");
  }

  getEvent(id: number): Observable<Event> {
    return this.http.get<Event>(this.url + "event/searchbyid/" + id);
  }

  getEventByName(name: String): Observable<Event> {
    return this.http.get<Event>(this.url + "event/searchbyname/" + name);
  }
D
  getEventPictures() {
    return this.http.get(this.url + "eventpicture/");
  }

  getEventPicture(id: number) {
    return this.http.get(this.url + "eventpicture/" + id);
  }
}
