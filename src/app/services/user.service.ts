import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.model';
import {User} from '../models/user';



@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    private apiUrl = 'https://lit-ocean-67937.herokuapp.com'

    getAll() {
        return this.http.get<User[]>(this.apiUrl +`/user`);
    }

    getById(id: number) {
        return this.http.get(this.apiUrl+`/user/${id}`);
    }

    
    register(user: UserModel) {
        this.generateUser(user);

        return this.http.post(this.apiUrl + `/user/create`, user);
    }

    update(user: User) {
        return this.http.put(this.apiUrl+`/user/${user.id}`, user);
    }

    delete(id: number) {
        return this.http.delete(this.apiUrl + `/user/${id}`);
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