import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import{environment} from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:3000/users/"
  
  
    constructor(private http: HttpClient) { }
  
    headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    
    registerUser(User: Data) {
      return this.http.post<any>(this._registerUrl, User,{observe: 'response'})
    }
  
  
    // loginUser(loginUser: any) {
    //   return this.http.get<any>(this._loginUrl, loginUser)
    // }
  }
