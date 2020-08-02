import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  id : number;
  newMessage : string;
  messageFile : string;
  messageStatus : string;
  messageTime : Date = new Date(Date.now());
  
  

  constructor() {}
    
  ngOnInit() {
  }

}
