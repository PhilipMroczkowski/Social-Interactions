import { Injectable } from '@angular/core';
import { User } from './user';
import {FormsModule} from '@angular/forms';
import {HttpClient}from '@angular/common/http';
//import {Response} from '@angular/http';
import {Observable} from 'rxjs';
import './rxjs/add/operator/map';

@Injectable()
export class UserService {

  readonly rootUrl='http://localhost:64493';
  constructor(private http:HttpClient) { }

  user:User={
    UserName:null,
    Password:null,
    Email:null,
    FirstName:null,
    LastName:null,
    BirthDate:null
  }

  registerUser(user:User){
    const body:User={
      UserName:user.UserName,
      Password:user.Password,
      Email:user.Email,
      FirstName:user.FirstName,
      LastName:user.LastName,
      BirthDate:user.BirthDate
    }
    return this.http.post(this.rootUrl +'/api/User/Register',body);
  }
  }
