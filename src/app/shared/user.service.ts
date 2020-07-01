import { Injectable, NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule , 
    ReactiveFormsModule
  ],
})
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
}
