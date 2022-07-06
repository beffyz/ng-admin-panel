import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>(
      'https://jsonplaceholder.typicode.com/users?_start=0&_limit=10'
    );
  }

  getUser(id: number) {
    return this.http.get<User>(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
  }
}
