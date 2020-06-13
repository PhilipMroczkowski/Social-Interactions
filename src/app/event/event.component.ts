import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  
  id: number;
  eventName: string;
  description: string;
  location: string;
  eventDate : Date = new Date();
  eventDuration : number;
  eventCategory : string;
  eventSubcategory : string;
  host : string;
  enableRating: boolean;
  numAttendees : number;

  constructor() { }

  ngOnInit() {
  }

}
