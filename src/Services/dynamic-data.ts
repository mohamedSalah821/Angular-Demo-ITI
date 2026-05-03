  import { HttpClient } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';
import { User } from '../Interfaces/User/user';

  @Injectable({
    providedIn: 'root',
  })
  export class DynamicData {

    constructor(private httpclient:HttpClient){}


    getAllUsers(): Observable<User[]>{
      return this.httpclient.get<any>('http://localhost:3000/users');
    }

    DeleteUser(id:number):Observable<any>{
      return this.httpclient.delete(`http://localhost:3000/users/${id}`);
    }

    Register(user:User):Observable<User>{
      return this.httpclient.post<User>('http://localhost:3000/users',user);
    }


  }
