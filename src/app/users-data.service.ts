import { Injectable } from '@angular/core';

export interface User {
  username: string;
  password: string;
 role: 'Registration Secretary' | 'Gym Teacher';
}
@Injectable({
  providedIn: 'root'
})

export class UsersDataService {
  users:User[] =[ {
    username: 'rachel123',
    password: 'pass1234',
    role: 'Registration Secretary'
  },
  {
    username: 'noaGym',
    password: 'gympass1',
    role: 'Gym Teacher'
  },
  {
    username: 'admin1',
    password: 'adminpass',
    role: 'Registration Secretary'
  }
  ];
    
  constructor() { }
  getUsers(): User[] {
    return this.users;
  }
  login(username: string, password: string): User | undefined {
    const  user: User|undefined = this.users.find(user => user.username === username && user.password === password);
    return user ? { ...user } : undefined;
  }
}
