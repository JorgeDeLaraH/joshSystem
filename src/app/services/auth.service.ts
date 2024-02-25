import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { _URL_AUTHUSER } from '../config/config';
import { Observable } from 'rxjs';
import { _URL_AUTH } from '../config/config';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  public authPost(data:Object):Observable<Object>{
    return this.http.post(_URL_AUTHUSER,data);
  }
}
