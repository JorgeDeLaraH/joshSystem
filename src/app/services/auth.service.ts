import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
<<<<<<< Updated upstream
import { _URL_AUTHUSER } from '../config/config';
import { Observable } from 'rxjs';
=======
import { Observable } from 'rxjs';
import { _URL_AUTH } from '../config/config';
>>>>>>> Stashed changes
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
<<<<<<< Updated upstream

  public authPost(data:Object):Observable<Object>{
    return this.http.post(_URL_AUTHUSER,data);
=======
  public authUser(data:Object):Observable<Object>{
    return this.http.post(_URL_AUTH,data);
>>>>>>> Stashed changes
  }
  
}
