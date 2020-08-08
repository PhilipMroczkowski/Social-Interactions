import { Component, OnInit, OnDestroy } from '@angular/core';
import { Event } from '../models/event';
import { EventService } from '../services/event.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-event-dashboard',
  templateUrl: './event-dashboard.component.html',
  styleUrls: ['./event-dashboard.component.css']
})
export class EventDashboardComponent implements OnInit, OnDestroy {
  Events: Event[];
  eventSubscription: Subscription;

  constructor(private eventService: EventService) { }
 
  ngOnInit(): void {
    this.eventSubscription = this.eventService.getAllEvents().subscribe((data)=>{
      this.Events = data;
    })
  }

  ngOnDestroy() {
    if (this.eventSubscription != undefined) {
      this.eventSubscription.unsubscribe();
    }
  }

}
