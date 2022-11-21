import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {  map } from 'rxjs';
import { UserRequest } from '../interfaces/Userrequest';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  activate= new EventEmitter<string>()
  
  constructor(private http: HttpClient) { }

  getAllRequests(){
    return this.http.get<UserRequest[]>('http://localhost:5491/request/getrequests').pipe
    (map((res)=>{
      console.log(res);
      return res
    }))
  }

  createRequest(obj:UserRequest){
    return this.http.post<UserRequest>('http://localhost:5491/request/createrequest', obj)
  }

}
