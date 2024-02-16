import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { _URL_AUTH } from '../config/config';
@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http:HttpClient) { }

  public postCliente(data:Object):Observable<Object>{
    return this.http.post(_URL_AUTH,data);
  }
}
