import { Component, OnInit, OnDestroy } from '@angular/core';
import { Event } from '../models/event';
import { EventService } from '../services/event.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-dashboard',
  templateUrl: './event-dashboard.component.html',
  styleUrls: ['./event-dashboard.component.css']
})
export class EventDashboardComponent implements OnInit, OnDestroy {
  Events: Event[];
  EventPictures: any;
  eventSubscription: Subscription;
  eventPictureSubscription:Subscription;

  filteredEvents : Event[];

  constructor(private eventService: EventService,
     private router: Router,
      private activeRoute: ActivatedRoute) { }
 
  ngOnInit(): void {
    this.eventSubscription = this.eventService.getAllEvents().subscribe((data)=>{
      this.Events = data;
      this.filteredEvents = data;
    })
    this.eventPictureSubscription = this.eventService.getEventPictures().subscribe((data)=>{
      this.EventPictures = data;
    })

  }

  onEventSearchKeyUP(event:any){
    let my_filter: string = event.target.value.toLowerCase();
    this.filteredEvents =  this.Events.filter((event) => 
    ((event.name.toLowerCase().indexOf(my_filter) != -1) || 
    (event.description.toLowerCase().indexOf(my_filter) != -1))) 
  }

  viewEvent(id: number) {
    this.router.navigate([id], {relativeTo: this.activeRoute});
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

