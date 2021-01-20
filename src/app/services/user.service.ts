import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.model';
import {User} from '../models/user';
import { Observable } from 'rxjs';



@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    private apiUrl = 'https://afternoon-plateau-61692.herokuapp.com'

    firstUser: Observable<User[]>;

    getAll() {
        return this.http.get<User[]>(this.apiUrl +`/user`);
    }

    getById(id: number): Observable<User[]> {
        return this.http.get<User[]>(this.apiUrl+`/user/${id}`);
    }

    
    register(user: UserModel) {
        this.generateUser(user);

        return this.http.post(this.apiUrl + `/user/create`, user);
    }

    update(user: User) {
        this.firstUser = this.getById(user.id);
        user = this.fillUser(this.firstUser, user);
        return this.http.put(this.apiUrl+`/user/${user.id}`, user);
    }

    delete(id: number) {
        return this.http.delete(this.apiUrl + `/user/${id}`);
    }

    fillUser(oldUser: Observable<User[]>, newUser: User): User {
        for (var key in newUser){
          if (newUser[key] == '' || newUser[key] == 0){
            newUser[key] = oldUser[key];
          }
        }
      
        return newUser;
      }

    generateUser(tempUser: UserModel): UserModel {
    var d = new Date();
    tempUser.phoneNumber= 'aaa';
    tempUser.address= 'aaa';
    tempUser.postalCode= 'aaa';
    tempUser.favouriteEvents= 'aaa';
    tempUser.favouriteGroups= 'aaa';
    tempUser.joinedGroups= 'aaa';
    tempUser.birthDate = d;
    tempUser.interests= 'aaa';

    return tempUser
    }
}