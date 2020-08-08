import { Component, OnInit } from '@angular/core';
import { EventComponent } from '../event/event.component';

@Component({
  selector: 'app-eventpictures',
  templateUrl: './eventpictures.component.html',
  styleUrls: ['./eventpictures.component.css']
})
export class EventpicturesComponent implements OnInit {

  imageUrl : string;

  constructor() { }

  ngOnInit() {
  }

}
