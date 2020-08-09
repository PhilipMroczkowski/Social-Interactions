import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Event } from '../models/event';
import { EventService } from '../services/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit, OnDestroy {
  event: any;
  eventPicture: any;
  eventID: number;
  eventSubscription: Subscription;
  eventPictureSubscription: Subscription;

  constructor(private eventService: EventService, private activeRoute: ActivatedRoute) {}
  
  ngOnInit() {
    this.activeRoute.params.subscribe(params=>{
      this.eventID = params['_id']
    })
    this.eventSubscription = this.eventService.getEvent(this.eventID).subscribe((data)=>{
      this.event = data[0];
    })
    this.eventPictureSubscription = this.eventService.getEventPicture(this.eventID).subscribe((data)=>{
      this.eventPicture = data[0];
    })
  }

  ngOnDestroy() {
    if (this.eventSubscription != undefined) {
      this.eventSubscription.unsubscribe();
    }
    if (this.eventPictureSubscription != undefined) {
      this.eventPictureSubscription.unsubscribe();
    }
  }

}
