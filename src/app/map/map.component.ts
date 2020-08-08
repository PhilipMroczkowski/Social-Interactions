import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, OnDestroy {
 
  zoom = 15;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: false,
    maxZoom: 18,
    minZoom: 10,
  };
  markerPosition;
  location = {lat: 0, lng: 0};
  address = "70 The Pond Road CA";

  //Observable
  geocodingObservable;
  //Subscription
  geocodingSupscription: Subscription;

  constructor() { 
   this.geocodingObservable = Observable.create(observer => {
    $.get( "https://maps.googleapis.com/maps/api/geocode/json",
    {address: this.address,
    key: 'AIzaSyCjzt3sPINQt8OMeLnIFOnHUWJFeLjyx20'},
    function(data) {
      observer.next(data);
    });
   })
  }
 
  ngOnInit() {

    this.geocodingSupscription = this.geocodingObservable.subscribe((data)=>{
      this.center = {
        lat: data.results[0].geometry.location.lat,
        lng: data.results[0].geometry.location.lng,
      };
      this.markerPosition = {
        lat: data.results[0].geometry.location.lat,
        lng: data.results[0].geometry.location.lng,
      };
    })

  }

  ngOnDestroy(): void {
    this.geocodingSupscription.unsubscribe();
  }
}